import {useRef} from 'react';
import type {HTMLAttributes, ReactNode, PointerEvent as ReactPointerEvent} from 'react';
import {motion, useMotionTemplate, useMotionValue, useSpring} from 'motion/react';
import {cn} from '../cn';
import {SPRING} from '../tokens';
import {useReducedMotion, useIsTouch} from '../hooks';

export type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Max rotation in degrees at the corners. */
  max?: number;
  /** Scale on hover. Set to 1 to disable. */
  hoverScale?: number;
  /** Show the moving specular highlight. */
  glare?: boolean;
};

/**
 * Pointer-driven 3D tilt with spring return and an optional glare sweep.
 * Automatically disabled on touch / coarse pointers and under reduced-motion
 * (renders a plain, still container). Give it a `rounded-*` class — the glare
 * inherits the radius.
 */
export function TiltCard({
  children,
  max = 9,
  hoverScale = 1.02,
  glare = true,
  className,
  ...rest
}: TiltCardProps) {
  const reduced = useReducedMotion();
  const isTouch = useIsTouch();
  const disabled = reduced || isTouch;

  const ref = useRef<HTMLDivElement>(null);
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, SPRING.soft);
  const rotateY = useSpring(rotateYRaw, SPRING.soft);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBg = useMotionTemplate`radial-gradient(600px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 45%)`;

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (disabled || !node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateYRaw.set((px - 0.5) * max * 2);
    rotateXRaw.set(-(py - 0.5) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  if (disabled) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={{scale: hoverScale}}
      transition={SPRING.soft}
      style={{rotateX, rotateY, transformPerspective: 1000}}
      className={cn('relative [transform-style:preserve-3d]', className)}
      {...rest}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{background: glareBg}}
        />
      )}
    </motion.div>
  );
}

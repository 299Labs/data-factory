"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/Button";
import ReactCanvasConfetti from "react-canvas-confetti";
import { motion } from "framer-motion";
import { FADE_DOWN_EXIT_BOTTOM_ANIMATION } from "@/src/config/framer";
import { useRouter } from "next/navigation";

const FinishStep = (): React.ReactElement => {
  const refAnimationInstance = useRef(null);
  const router = useRouter();

  const getInstance = useCallback((instance): void => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts): void => {
    refAnimationInstance.current?.({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }, []);

  const fire = useCallback((): void => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <>
      <motion.div
        exit="exit"
        animate="animate"
        initial="initial"
        variants={FADE_DOWN_EXIT_BOTTOM_ANIMATION}
      >
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          variant="default"
          size="lg"
          className="justify-center"
        >
          Start now!
        </Button>
      </motion.div>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default FinishStep;

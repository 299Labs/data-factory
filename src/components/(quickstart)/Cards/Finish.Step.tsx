"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/Button";
import ReactCanvasConfetti from "react-canvas-confetti";
import { motion } from "framer-motion";
import { FADE_DOWN_EXIT_BOTTOM_ANIMATION } from "@/src/config/framer";
import { useRouter } from "next/navigation";
import type { DBCompanyProfile, DBUser } from "@/src/lib/db/schema";
import { db } from "@/src/lib/db";

interface ModuleStepProps {
  company?: DBCompanyProfile;
  user?: DBUser;
}

const FinishStep: React.FC<ModuleStepProps> = ({ company, user }) => {
  const refAnimationInstance = useRef(null);
  const router = useRouter();

  const getInstance = useCallback((instance: null): void => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback(
    (particleRatio: number, opts: Record<string, unknown>): void => {
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-expect-error
      refAnimationInstance.current?.({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    },
    [],
  );

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

  function initialize(): void {
    if (company != null && user != null) {
      void db.profile.add(company);
      void db.users.add(user);
      router.push("/dashboard");
    } else {
      router.push("?step=1");
    }
  }

  return (
    <>
      <motion.div
        exit="exit"
        animate="animate"
        initial="initial"
        variants={FADE_DOWN_EXIT_BOTTOM_ANIMATION}
      >
        <Button
          onClick={initialize}
          variant="default"
          size="lg"
          disabled={company?.name == null}
          className="justify-center"
        >
          Start now!
        </Button>
      </motion.div>
      <ReactCanvasConfetti
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
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

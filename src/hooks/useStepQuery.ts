import { useSearchParams } from "next/navigation";

export function useStepQuery(): number {
  const searchParams = useSearchParams();
  const paramsStep = searchParams.get("step");

  return paramsStep !== null ? +paramsStep : 1;
}

import { type FC, type SVGProps } from "react";
import {
  ArrowLongRightIcon,
  ArrowRightCircleIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  FaceSmileIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  SignalSlashIcon,
} from "@heroicons/react/24/outline";

const LogoType: FC = (props: SVGProps<SVGSVGElement>) => (
  <div className="cursor-pointer rounded-[8px] border p-2 duration-150 ease-in hover:scale-105 active:scale-95">
    <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0h11.873C17.466 0 22 4.534 22 10.127v1.746C22 17.466 17.466 22 11.873 22h-1.746C4.534 22 0 17.466 0 11.873V0z"
        fill="#03001C"
      />
      <circle cx={11} cy={11} r={7.286} fill="#fff" />
    </svg>
  </div>
);

export const Icons = {
  logo: LogoType,
  search: MagnifyingGlassIcon,
  arrowLongRight: ArrowLongRightIcon,
  rocket: RocketLaunchIcon,
  home: HomeIcon,
  calendar: CalendarIcon,
  noSignal: SignalSlashIcon,
  serverStack: ServerStackIcon,
  rectangleGroup: RectangleGroupIcon,
  faceSmile: FaceSmileIcon,
  arrowRightCircle: ArrowRightCircleIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
};

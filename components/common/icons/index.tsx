import React, { FC } from "react";
import BarSeating from "../../../public/icons/bar-seating.svg";
import Bright from "../../../public/icons/bright.svg";
import Candle from "../../../public/icons/candle.svg";
import Carpet from "../../../public/icons/carpet.svg";
import Connections from "../../../public/icons/connections.svg";
import Drainage from "../../../public/icons/drainage.svg";
import Drinks from "../../../public/icons/drinks.svg";
import Furniture from "../../../public/icons/furniture.svg";
import HostStand from "../../../public/icons/host-stand.svg";
import Infrastructure from "../../../public/icons/infrastructure.svg";
import Light from "../../../public/icons/light.svg";
import OutdoorSeating from "../../../public/icons/outdoor-seating.svg";
import Service from "../../../public/icons/service.svg";
import Table from "../../../public/icons/table.svg";
import Target from "../../../public/icons/target.svg";
import Tech from "../../../public/icons/tech.svg";
import Tee from "../../../public/icons/tee.svg";
import Window from "../../../public/icons/window.svg";
import DrivingRange from "../../../public/icons/driving.svg";
import Seating from "../../../public/icons/seating.svg";
import Tennis from "../../../public/icons/racquets/tennis.svg";
import Racquet from "../../../public/icons/racquets/racquet.svg";
import Certificate from "../../../public/icons/racquets/certificate.svg";
import Lightbulb from "../../../public/icons/racquets/lightbulb.svg";

export type IconsLiteral =
  | "barSeating"
  | "bright"
  | "candle"
  | "carpet"
  | "connections"
  | "seating"
  | "drainage"
  | "drinks"
  | "furniture"
  | "hostStand"
  | "infrastructure"
  | "light"
  | "outdoorSeating"
  | "service"
  | "table"
  | "target"
  | "tech"
  | "tee"
  | "drivingRange"
  | "window"
  | "tennis"
  | "racquet"
  | "certificate"
  | "lightbulb";

type IconsType = {
  [key in IconsLiteral]: FC;
};

const Icons: IconsType = {
  barSeating: () => <BarSeating />,
  drivingRange: () => <DrivingRange />,
  seating: () => <Seating />,
  bright: () => <Bright />,
  candle: () => <Candle />,
  carpet: () => <Carpet />,
  connections: () => <Connections />,
  drainage: () => <Drainage />,
  drinks: () => <Drinks />,
  furniture: () => <Furniture />,
  hostStand: () => <HostStand />,
  infrastructure: () => <Infrastructure />,
  light: () => <Light />,
  outdoorSeating: () => <OutdoorSeating />,
  service: () => <Service />,
  table: () => <Table />,
  target: () => <Target />,
  tech: () => <Tech />,
  tee: () => <Tee />,
  window: () => <Window />,
  tennis: () => <Tennis />,
  racquet: () => <Racquet />,
  certificate: () => <Certificate />,
  lightbulb: () => <Lightbulb />,
};

export default Icons;

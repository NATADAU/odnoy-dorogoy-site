import type { StaticImageData } from "next/image";
import domaLuchshe from "../public/photos/projects/doma-luchshe.jpg";
import turizm from "../public/photos/projects/turizm-ya-s-vami.jpg";
import smeloeReshenie from "../public/photos/projects/smeloe-reshenie.jpg";
import tvorcheskayaStudiya from "../public/photos/projects/tvorcheskaya-studiya.jpg";
import raceWheels from "../public/photos/projects/race-wheels.jpg";
import buitpushka from "../public/photos/projects/buitpushka.jpg";
import team01 from "../public/photos/team/sergey-matveev.png";
import team02 from "../public/photos/team/irina-sukharnikova.png";
import team03 from "../public/photos/team/kseniya-matveeva.png";
import team04 from "../public/photos/team/egor-kabaylov.jpg";
import team05 from "../public/photos/team/aleksandra-osipova.jpg";
import team06 from "../public/photos/team/andrey-zabavnikov.jpg";

export const projectImages: Record<string, StaticImageData> = {
  "doma-luchshe": domaLuchshe,
  turizm,
  "smeloe-reshenie": smeloeReshenie,
  oss: tvorcheskayaStudiya,
  buitpushka,
  "race-wheels": raceWheels,
};

export const teamImages = [team01, team02, team03, team04, team05, team06];

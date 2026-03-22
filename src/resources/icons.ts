import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { TbCpu } from "react-icons/tb";
import { HiOutlineCalculator } from "react-icons/hi2";
import { TbActivity } from "react-icons/tb";

import { SiJupyter } from "react-icons/si";
import { TbNetwork, TbBug } from "react-icons/tb";


import {
  SiReact,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

import { SiDjango } from "react-icons/si";

import {
  SiHtml5,
  SiMysql,        // or SiPostgresql / SiSqlite
} from "react-icons/si";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiCpuChip,
  HiCommandLine,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiPython,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiGo,
  SiRust,
  SiKotlin,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiArduino,
  SiRaspberrypi,
  SiLinux,
  SiGit,
  SiDocker,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";


export const iconLibrary: Record<string, IconType> = {
  // General UI
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,

  // Socials
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,

  // Web / existing
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,

  // Programming languages
  python: SiPython,
  c: SiC,
  cpp: SiCplusplus,
  typescript: SiTypescript,
  go: SiGo,
  rust: SiRust,
  java: FaJava,
  kotlin: SiKotlin,

  // ML / AI
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  scikitlearn: SiScikitlearn,

  // Hardware / systems
  cpu: HiCpuChip,
  terminal: HiCommandLine,
  verilog: TbCpu,

  // Embedded / hardware platforms
  arduino: SiArduino,
  raspberrypi: SiRaspberrypi,

  // Tools / systems
  linux: SiLinux,
  git: SiGit,
  docker: SiDocker,

  html: SiHtml5,
  sql: SiMysql,        // or SiPostgresql / SiSqlite
  assembly: HiCommandLine,  // good fallback
  matlab: HiOutlineCalculator,      // if available, else fallback
  activity: TbActivity,

  react: SiReact,
  numpy: SiNumpy,
  pandas: SiPandas,
  django: SiDjango,

  wireshark: TbNetwork,
  ghidra: HiCommandLine,
  jupyter: SiJupyter,

  platformio: HiCommandLine,
  vscode: HiCommandLine,
  kicad: TbCpu,              // PCB / hardware design
  quartus: HiCpuChip,            // FPGA design
  vivado: HiCpuChip,             // FPGA design
  paper: HiOutlineDocument, // resume paper
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary; // make sure this line exists
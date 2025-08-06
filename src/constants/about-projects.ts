export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Seoul Line 9 Wayside Signaling",
    description: [
      "Experience of whole Seoul Line 9 from the beginning of Phase 1 in Seoul, Korea in 2007.",
      "The project has been on service over ten years with proper support of ALSTOM.",
      "The project has successfully completed a total of 38 stations and 15 interlocking stations in December 2018.",
    ].join("\n"),
    image: "/assets/img/about1.gif",
  },
  {
    id: 2,
    title: "Sosa-Wonsi Line Wayside Signaling (RF-CBTC)",
    description: [
      "Experiencing with SIEMENS, we have successfully built the RF-CBTC system.",
      "The project was completed in June 2018 as a fully automated signaling system.",
      "In particular, this section was designed for mixed-operation with RF-CBTC and ETCS Level 1.",
    ].join("\n"),
    image: "/assets/img/about2.gif",
  },
  {
    id: 3,
    title: "Sosa-Wonsi Line On-board Signaling",
    description:
      "Experience with SIEMENS' on-board signaling system on 28 electric trains providing to HYUNDAI-ROTEM.",
    image: "/assets/img/about3.gif",
  },
  {
    id: 4,
    title: "Seoul Line 9 Magok Express & Gaehwa PSD",
    description:
      "Experience to interface the PSD system newly installed to Gaewha station and make Magok station as an express stop station for passengers.",
    image: "/assets/img/about4.gif",
  },
  {
    id: 5,
    title: "AREX Wayside Signaling",
    description:
      "Experience for installation, test and commissioning to AREX phase 1 (Kimpo Airport ~ Incheon Airport) and phase 2 (Seoul Station ~ Kimpo Airport).",
    image: "/assets/img/about5.gif",
  },
  {
    id: 6,
    title: "Daegu Line 2 Wayside/On-board Signaling",
    description:
      "Experience for the Distance to Go principled system with ALSTOM for Wayside and On-board signaling system.",
    image: "/assets/img/about6.gif",
  },
  {
    id: 7,
    title: "Gwang-ju Line1 Wayside Signaling",
    description: "Experience for fixed-block signaling system with KYOSAN.",
    image: "/assets/img/about7.gif",
  },
  {
    id: 8,
    title: "Daegu Line1 Wayside & Onboard Signaling",
    description:
      "Experience for the Automatic Train Operation system with ALSTOM Signaling (Formerly known as GRS (General Railway Signal)).",
    image: "/assets/img/about8.gif",
  },
  {
    id: 9,
    title: "CCTV Intelligent Surveillance System",
    description:
      "Video surveillance system for a platform in Seoul Line 2. Video surveillance system for Trains in Seoul Line 2 (a branch line).",
    image: "/assets/img/about9.gif",
  },
  {
    id: 10,
    title: "Taipei Metro VDU Project",
    description: [
      "Taiwan Taipei Orange Line PAO VDU.",
      "Taiwan Taipei Green Line PAO VDU.",
      "Taiwan Taipei Blue Line PAO VDU.",
      "Taiwan Taipei Thcheng Line PAO VDU.",
      "Taiwan Taipei CCR Interface System.",
    ].join("\n"),
    image: "/assets/img/about10.gif",
  },
];

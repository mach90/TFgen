/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { FaBed, FaBookOpen, FaCalendarAlt, FaCar, FaCheckCircle, FaCreativeCommonsZero, FaNotesMedical, FaPaperclip, FaRoute, FaSmile, FaTheaterMasks, FaUser } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FaCircleXmark, FaHelmetSafety, FaTowerCell, FaUserGroup } from "react-icons/fa6";
import { RiContactsBook2Fill, RiRocketFill } from "react-icons/ri";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { IoIosBody } from "react-icons/io";
import { LuCandlestickChart } from "react-icons/lu";
import { TbRouteOff } from "react-icons/tb";
import { BsFillBackpack2Fill } from "react-icons/bs";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
INFOS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const infos = [
    {
        title: 'Easy and fast',
        description: "User-friendly interface to create a comprehensive travel form in minutes.",
        icon: RiRocketFill,
    },
    {
        title: 'Free',
        description: "It's an open source project so it's totally free to use.",
        icon: FaCreativeCommonsZero,
    },
    {
        title: 'Privacy',
        description: "Your personal informations aren't saved or processed anywhere except in your browser.",
        icon: MdPrivacyTip,
    },
    {
        title: 'Safety',
        description:
        "Increase your security by sharing your travel plans with trusted contacts.",
        icon: FaHelmetSafety,
    },
    {
        title: 'Peace of Mind',
        description: "Travel knowing someone can act appropriately if you don't check in when supposed to.",
        icon: FaSmile,
    },
    {
        title: 'Better preparation',
        description: "Creating a travel form encourages you to prepare your trip in more detail.",
        icon: FaCheckCircle,
    },
];

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STATS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const stats = [
    {
        title: '1% never found',
        description: 'An estimated 10-30 hikers go missing in France each year and are never found.',
        icon: PiNumberCircleOneFill,
    },
    {
        title: 'First 48h are crucial',
        description: 'Survival chances drop from 90% to 50% after 48 hours. Quick, efficient search efforts and signaling are crucial.',
        icon: PiNumberCircleTwoFill,
    },
    {
        title: 'Lack of preparation',
        description: 'The most common causes of hiker distress include lack of preparation, underestimating difficulty, and environmental conditions.',
        icon: FaCircleXmark,
    },
];

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STORIES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const stories = [
    {
        storyTitle: "Story A",
        storyIcon: FaBookOpen,
        storyParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada suscipit posuere. Nulla ac porta urna. Sed hendrerit tortor velit, quis tincidunt mi rhoncus non. Duis consequat feugiat tempor. Suspendisse potenti. Suspendisse gravida suscipit sagittis. In pulvinar elit dolor, quis scelerisque nibh sagittis vitae. Duis ac tellus nulla.",
        storyImage: "https://images.unsplash.com/photo-1729157192628-47b6428a32c5?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        storyTitle: "Story B",
        storyIcon: FaBookOpen,
        storyParagraph: "Vivamus imperdiet, nulla in ultricies vehicula, nulla elit dictum ex, et tincidunt risus dui quis tortor. Nulla ultrices risus ac scelerisque faucibus. Etiam efficitur sem ante. Morbi eu mi sit amet arcu tempus iaculis eu sed metus. Cras vel magna quis est sollicitudin pretium malesuada in nisl. Cras fringilla elit eu orci dignissim, non ornare enim malesuada. Suspendisse tincidunt elit vitae mauris rutrum dictum. Fusce arcu sapien, eleifend non dui id, vulputate imperdiet mauris. Phasellus tincidunt maximus erat, vel laoreet sapien finibus a. Vivamus dictum auctor posuere.",
        storyImage: "https://images.unsplash.com/photo-1729157268193-93ef07a389c9?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        storyTitle: "Story C",
        storyIcon: FaBookOpen,
        storyParagraph: "Vestibulum interdum sit amet turpis quis maximus. Suspendisse nec justo id nisl pellentesque mattis nec nec quam. Aliquam vulputate sit amet dui nec maximus. Donec consectetur tortor pulvinar, rhoncus turpis ac, venenatis leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vestibulum molestie justo, ac lacinia dui volutpat quis. Suspendisse maximus felis enim, in consectetur est rhoncus ut. Mauris eget arcu ac augue lobortis blandit.",
        storyImage: "https://images.unsplash.com/photo-1729157140085-113c73cdb252?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        storyTitle: "Story D",
        storyIcon: FaBookOpen,
        storyParagraph: "Aenean mollis scelerisque diam, quis viverra metus fermentum vitae. Maecenas nunc turpis, ultrices at accumsan sed, vehicula non arcu. Donec ac placerat diam. Praesent vitae hendrerit purus. Duis non ullamcorper ex. Praesent ut enim odio. Donec id elementum dolor, in semper orci. Sed sed molestie dui, eget faucibus ante. Curabitur lacinia dapibus consequat. Maecenas tellus diam, hendrerit nec tempor eu, euismod non enim. Donec eget pellentesque urna. Quisque sodales, velit vitae pretium pharetra, nulla sem sodales nibh, quis luctus orci odio nec metus.",
        storyImage: "https://images.unsplash.com/photo-1729157157341-35895c769ef7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
FORM ELEMENTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const formFieldsets = [
    {
        fieldsetId: "identityElement",
        fieldsetTitle: "IDENTITY",
        fieldsetElement: "fieldset-identity",
        fieldsetMenuBtn: "identity-btn",
        fieldsetIcon: FaUser,
        fieldsetDescription: "To know your identity",
    },
    {
        fieldsetId: "datesElement",
        fieldsetTitle: "DATES",
        fieldsetElement: "fieldset-dates",
        fieldsetMenuBtn: "dates-btn",
        fieldsetIcon: FaCalendarAlt,
        fieldsetDescription: "To know when you leave and when you are supposed to be back",
    },
    {
        fieldsetId: "appearanceElement",
        fieldsetTitle: "APPEARANCE",
        fieldsetElement: "fieldset-appearance",
        fieldsetMenuBtn: "appearance-btn",
        fieldsetIcon: IoIosBody,
        fieldsetDescription: "To help in visual identification",
    },
    {
        fieldsetId: "medicalElement",
        fieldsetTitle: "MEDICAL",
        fieldsetElement: "fieldset-medical",
        fieldsetMenuBtn: "medical-btn",
        fieldsetIcon: FaNotesMedical,
        fieldsetDescription: "To know your limitations and anticipate and provide medical solutions",
    },
    {
        fieldsetId: "vehiclesElement",
        fieldsetTitle: "VEHICLES",
        fieldsetElement: "fieldset-vehicles",
        fieldsetMenuBtn: "vehicles-btn",
        fieldsetIcon: FaCar,
        fieldsetDescription: "To help in visual identification of your vehicle and estimate your range",
    },
    {
        fieldsetId: "communicationElement",
        fieldsetTitle: "COMMUNICATION",
        fieldsetElement: "fieldset-communication",
        fieldsetMenuBtn: "communication-btn",
        fieldsetIcon: FaTowerCell,
        fieldsetDescription: "To know your communication capabilities",
    },
    {
        fieldsetId: "stayingElement",
        fieldsetTitle: "STAYING",
        fieldsetElement: "fieldset-staying",
        fieldsetMenuBtn: "staying-btn",
        fieldsetIcon: FaBed,
        fieldsetDescription: "To know where you might stay",
    },
    {
        fieldsetId: "contactsElement",
        fieldsetTitle: "CONTACTS",
        fieldsetElement: "fieldset-contacts",
        fieldsetMenuBtn: "contacts-btn",
        fieldsetIcon: RiContactsBook2Fill,
        fieldsetDescription: "To know who to contact first if anything happens",
    },
    {
        fieldsetId: "personnalityElement",
        fieldsetTitle: "PERSONNALITY",
        fieldsetElement: "fieldset-personnality",
        fieldsetMenuBtn: "personnality-btn",
        fieldsetIcon: FaTheaterMasks,
        fieldsetDescription: "To better understand who you are",
    },
    {
        fieldsetId: "skillsElement",
        fieldsetTitle: "SKILLS",
        fieldsetElement: "fieldset-skills",
        fieldsetMenuBtn: "skills-btn",
        fieldsetIcon: LuCandlestickChart,
        fieldsetDescription: "To know what you are capable of",
    },
    {
        fieldsetId: "groupElement",
        fieldsetTitle: "GROUP",
        fieldsetElement: "fieldset-group",
        fieldsetMenuBtn: "group-btn",
        fieldsetIcon: FaUserGroup,
        fieldsetDescription: "To know who you are traveling with",
    },
    {
        fieldsetId: "tripElement",
        fieldsetTitle: "TRIP",
        fieldsetElement: "fieldset-trip",
        fieldsetMenuBtn: "trip-btn",
        fieldsetIcon: FaRoute,
        fieldsetDescription: "To know your precise itinerary",
    },
    {
        fieldsetId: "issuesElement",
        fieldsetTitle: "TRIP ISSUES",
        fieldsetElement: "fieldset-issues",
        fieldsetMenuBtn: "issues-btn",
        fieldsetIcon: TbRouteOff,
        fieldsetDescription: "To know if you have anticipated problems and your possible intentions",
    },
    {
        fieldsetId: "equipmentElement",
        fieldsetTitle: "EQUIPMENT",
        fieldsetElement: "fieldset-equipment",
        fieldsetMenuBtn: "equipment-btn",
        fieldsetIcon: BsFillBackpack2Fill,
        fieldsetDescription: "To know your food and material capacities",
    },
    {
        fieldsetId: "attachmentsElement",
        fieldsetTitle: "ATTACHMENTS",
        fieldsetElement: "fieldset-attachments",
        fieldsetMenuBtn: "attachments-btn",
        fieldsetIcon: FaPaperclip,
        fieldsetDescription: "To know what documents you have joined to the Travel Form",
    },
]

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export { infos, stats, stories, formFieldsets };
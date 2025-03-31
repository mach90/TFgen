//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
/* //////////////////////////////////////////////////
ICONS
////////////////////////////////////////////////// */
import { IconType } from "react-icons";
import { FaBed, FaBookOpen, FaCalendarAlt, FaCar, FaCheckCircle, FaCreativeCommonsZero, FaNotesMedical, FaPaperclip, FaRoute, FaSmile, FaTheaterMasks, FaUser } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FaCircleXmark, FaHelmetSafety, FaTowerCell, FaUserGroup } from "react-icons/fa6";
import { RiContactsBook2Fill, RiRocketFill } from "react-icons/ri";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { IoIosBody } from "react-icons/io";
import { LuChartCandlestick } from "react-icons/lu";
import { TbRouteOff } from "react-icons/tb";
import { BsFillBackpack2Fill } from "react-icons/bs";
/* //////////////////////////////////////////////////
STORIES IMAGES
////////////////////////////////////////////////// */
import IllustrationUtahDesert from "../img/illustration-utah-desert.avif";
import IllustrationVercorsMountain from "../img/illustration-vercors-mountain.avif";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// DATA TYPE
//////////////////////////////////////////////////////////////////////////////////////////////////////
type Infos = {
    title: string;
    description: string;
    icon: IconType;
}

type Stats = {
    title: string;
    description: string;
    icon: IconType;
}

type Stories = {
    storyTitle: string;
    storyIcon: IconType;
    storyParagraph: string;
    storyImage: string;
}

type FormFieldsets = {
    fieldsetId: string;
    fieldsetTitle: string;
    fieldsetElement: string;
    fieldsetMenuBtn: string;
    fieldsetIcon: IconType,
    fieldsetDescription: string;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// INFOS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////////
const infos: Infos[] = [
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STATS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////////
const stats: Stats[] = [
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STORIES DATA
//////////////////////////////////////////////////////////////////////////////////////////////////////
const stories: Stories[] = [
    {
        storyTitle: "Coordinates",
        storyIcon: FaBookOpen,
        storyParagraph: "David, an amateur landscape photographer, was exploring remote canyons in Utah's backcountry. His travel form noted a specific detail: he was working on a project photographing rare desert wildflowers, which only bloom for a few days in early spring. When he missed his check-in deadline, his brother knew something was wrong - David had listed three precise GPS coordinates where these flowers were reported, planning to visit them in sequence. The form also detailed his limited desert experience and water supply. This prompted his brother to alert authorities just 18 hours after the missed check-in, rather than assuming David was just taking extra time for photos. SAR teams efficiently checked the three locations, finding him at the second coordinate. His car had gotten stuck in deep sand, and while trying to walk out, he had become disoriented in the identical-looking canyons. The specific coordinates, combined with the early alert due to his brother knowing his exact water limitations, led to his rescue before severe dehydration set in.",
        storyImage: IllustrationUtahDesert,
    },
    {
        storyTitle: "'For the weekend'",
        storyIcon: FaBookOpen,
        storyParagraph: "Thomas, 32, was found deceased in the Vercors Mountains after six days. He had told his sister he was 'going hiking for the weekend' and to expect him back Sunday night. Monday morning, his sister tried to reach him but Thomas didn't answer, she wasn't overly concerned, Thomas rarely answer his phone while at work. Only on Monday evening did she started feeling worried, she reported him missing on Tuesday afternoon after hesitation. The investigation revealed Thomas had parked near Romeyer village for what turned out to be an ambitious 17km hike to the remote Tussac plateau. On Sunday afternoon, he had twisted his ankle badly on the descent but managed to set up his summer tent, hoping to recover enough to walk back the next day. What his sister didn't know, and what would have been crucial information: Thomas had taken the steep and isolated Pas de Côte Belle trail. A violent autumn storm hit the area Monday evening. The PGHM later determined that Thomas, unable to walk properly and still 12km from his car, succumbed to hypothermia during this storm. A simple travel form indicating his exact trail choice would have led to a Monday morning alert and a rapid search along a specific path - the PGHM could have reached his tent before the fatal storm hit.",
        storyImage: IllustrationVercorsMountain,
    },
    // {
    //     storyTitle: "Story C",
    //     storyIcon: FaBookOpen,
    //     storyParagraph: "Vestibulum interdum sit amet turpis quis maximus. Suspendisse nec justo id nisl pellentesque mattis nec nec quam. Aliquam vulputate sit amet dui nec maximus. Donec consectetur tortor pulvinar, rhoncus turpis ac, venenatis leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vestibulum molestie justo, ac lacinia dui volutpat quis. Suspendisse maximus felis enim, in consectetur est rhoncus ut. Mauris eget arcu ac augue lobortis blandit.",
    //     storyImage: "https://images.unsplash.com/photo-1729157140085-113c73cdb252?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //     storyTitle: "Story D",
    //     storyIcon: FaBookOpen,
    //     storyParagraph: "Aenean mollis scelerisque diam, quis viverra metus fermentum vitae. Maecenas nunc turpis, ultrices at accumsan sed, vehicula non arcu. Donec ac placerat diam. Praesent vitae hendrerit purus. Duis non ullamcorper ex. Praesent ut enim odio. Donec id elementum dolor, in semper orci. Sed sed molestie dui, eget faucibus ante. Curabitur lacinia dapibus consequat. Maecenas tellus diam, hendrerit nec tempor eu, euismod non enim. Donec eget pellentesque urna. Quisque sodales, velit vitae pretium pharetra, nulla sem sodales nibh, quis luctus orci odio nec metus.",
    //     storyImage: "https://images.unsplash.com/photo-1729157157341-35895c769ef7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORM ELEMENTS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////////
const formFieldsets: FormFieldsets[] = [
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
        fieldsetIcon: LuChartCandlestick,
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// EXPORT
//////////////////////////////////////////////////////////////////////////////////////////////////////
export { infos, stats, stories, formFieldsets };
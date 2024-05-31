/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import Container from "./Container";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";
import { InformationCircleIcon, HandThumbUpIcon, ClockIcon, IdentificationIcon } from '@heroicons/react/20/solid';
import AppScreenshot from "../img/descriptionimg1.jpg";

/* //////////////////////////////////////////////////
Object containing infos
////////////////////////////////////////////////// */
const infos = [
  {
    name: 'What is it ?',
    description:
      "An Emergency Plan of Action is a document storing informations about you and your travel plan. It's shared with family, friends, and relevant services to aid in potential emergencies.",
    icon: InformationCircleIcon,
  },
  {
    name: 'Why you should have one ?',
    description: "It can be life-saving, enabling swift and appropriate action by trusted individuals and services during emergencies.",
    icon: HandThumbUpIcon,
  },
  {
    name: 'Swift and appropriate action ?',
    description: 'After 48h the probability of retrieval and survival are drastically reduced, this is why the emergency services must be alerted as soon as possible when the emergency situation is confirmed.',
    icon: ClockIcon,
  },
  {
    name: 'Precision and details are important',
    description: 'It will help emergency services understand you and the situation as precisely as possible in order to take appropriate actions.',
    icon: IdentificationIcon,
  },
]

/* //////////////////////////////////////////////////
INFORMATIONS COMPONENT
////////////////////////////////////////////////// */
export default function Informations() {
    return (
        <Container>
          <div className="bg-darkCard p-4 rounded-md w-[100%] flex flex-col justify-center items-center">
              <p className="text-base font-semibold text-darkP mt-12">EPA stands for</p>
              <h1 className="mt-2 text-3xl font-bold text-darkH1 md:text-4xl">Emergency Plan of Action</h1>
              <img className="mt-12 hidden md:block w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%]  rounded-xl" src={AppScreenshot} alt="App screenshot"/>
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-400 w-[70%] text-justify">
                {infos.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-orangeAccent">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-medium1" aria-hidden="true" />
                    {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            <div className="flex my-12 justify-center">
              <NavLink to="travelformgenerator" className="flex gap-2">
                <NavButton buttonStyle="active">
                  Create your EPA now.
                </NavButton>
              </NavLink>
            </div>
          </div>
        </Container>
    );
}

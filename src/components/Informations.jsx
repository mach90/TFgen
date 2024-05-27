import Container from "./Container";
import { InformationCircleIcon, HandThumbUpIcon, ClockIcon, IdentificationIcon } from '@heroicons/react/20/solid';
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";

const features = [
  {
    name: 'What is it ?',
    description:
      'An Emergency Plan of Action is a travel document detailing your whereabout, travel plans and personnality, shared with your family, friends and eventual services such as park rangers.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Why you should have one ?',
    description: 'It can save your life by allowing the right people to take appropriate action at the appropriate moment if something should happen to you during your trip.',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Why is timing crucial ?',
    description: 'After 48h the probability of retrieval are drastically reduced.',
    icon: ClockIcon,
  },
  {
    name: 'Why so much details ?',
    description: 'It will help emergency services understand how you think and behave.',
    icon: IdentificationIcon,
  },
]

export default function Informations() {
    return (
        <Container>
          <div className="bg-dark1 p-4 rounded-md w-[100%] flex flex-col justify-center items-center">
              <h2 className="text-base font-semibold text-medium1">EPA stands for</h2>
              <p className="mt-2 text-3xl font-bold text-gray-300 md:text-4xl">Emergency Plan of Action</p>
              <img className="mt-12 hidden md:block w-[80%] sm:w-[75%] mg:w-[70%] lg:w-[65%] xl:w-[60%]  rounded-xl" src="./src/img/document.png"/>
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-400 w-[70%] text-justify">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-bright1">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-medium1" aria-hidden="true" />
                    {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            <div className="flex my-12 justify-center">
              <NavLink to="travelformgenerator" className="flex gap-2">
                <NavButton active>
                  Create your EPA now.
                </NavButton>
              </NavLink>
            </div>
          </div>
        </Container>
    );
}

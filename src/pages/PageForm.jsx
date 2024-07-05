/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { useEffect, useReducer } from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import SectionForm from '../components/SectionForm';
import FooterBar from "../components/FooterBar";
import ControlArrowUp from "../components/ControlArrowUp";
// import { PDFViewer } from '@react-pdf/renderer';
// import SectionDocument from '../components/SectionDocument';

/* //////////////////////////////////////////////////
FORM INITIAL STATE
////////////////////////////////////////////////// */ 
const initialState = {
    fullName: "", sexe: "", dob: "", nationality: "", etd: "", eta: "", height: "", weight: "", hair: "", distinctive: "", travelOutfit: "", bloodtype: "", // importantMedication: "", currentMedication: "", medicalDevices: "", allergies: "", psyCondition: "", otherMedicalInfos: "", driverLicence: "", vehicleTypeColor: "", vehicleReg: "", vehicleRentalAgency: "", telephone: "", communicationDevices: "", checkInReport: "", signalCoverage: "", staying: "", contacts: "", autostop: "", drinkingHabit: "", smokingHabit: "", drugUseHabit: "", personalityTrait: "", trustLevel: "", confidence: "", hobbies: "", languages: "", fitnessCondition: "", swimming: "", // outdoorSkill: "", hikingExperience: "", survivalSkills: "", militaryExperience: "", fightingSkills: "", medicSkills: "", paperMoney: "", tripPlan: "", groupMembers: "", intentions: "", waterFoodSuply: "", survivalEquipment: "", attachments: "", thisIsOurDate: "",
}

/* //////////////////////////////////////////////////
FORM REDUCER
////////////////////////////////////////////////// */ 
function reducer(state, action) {
    switch(action.type) {
        case "formSubmitted": return {
          ...state, fullName: action.payload.fullNamePayload, sexe: action.payload.sexePayload, dob: action.payload.dobPayload, nationality: action.payload.nationalityPayload, etd: action.payload.etdPayload, eta: action.payload.etaPayload, height: action.payload.heightPayload, weight: action.payload.weightPayload, hair: action.payload.hairPayload, distinctive: action.payload.distinctivePayload, travelOutfit: action.payload.travelOutfitPayload, bloodtype: action.payload.bloodtypePayload,currentMedication: action.payload.currentMedicationPayload, medicalDevices: action.payload.medicalDevicesPayload, allergies: action.payload.allergiesPayload, psyCondition: action.payload.psyConditionPayload, otherMedicalInfos: action.payload.otherMedicalInfosPayload, driverLicence: action.payload.driverLicencePayload, vehicleTypeColor: action.payload.vehicleTypeColorPayload, vehicleReg: action.payload.vehicleRegPayload, vehicleRentalAgency: action.payload.vehicleRentalAgencyPayload, telephone: action.payload.telephonePayload, communicationDevices: action.payload.communicationDevicesPayload, checkInReport: action.payload.checkInReportPayload, signalCoverage: action.payload.signalCoveragePayload, staying: action.payload.stayingPayload, contacts: action.payload.contactsPayload, autostop: action.payload.autostopPayload, drinkingHabit: action.payload.drinkingHabitPayload, smokingHabit: action.payload.smokingHabitPayload, drugUseHabit: action.payload.drugUseHabitPayload, personalityTrait: action.payload.personalityTraitPayload, trustLevel: action.payload.trustLevelPayload, confidence: action.payload.confidencePayload, hobbies: action.payload.hobbiesPayload, languages: action.payload.languagesPayload, fitnessCondition: action.payload.fitnessConditionPayload, swimming: action.payload.swimmingPayload,hikingExperience: action.payload.hikingExperiencePayload, survivalSkills: action.payload.survivalSkillsPayload, militaryExperience: action.payload.militaryExperiencePayload, fightingSkills: action.payload.fightingSkillsPayload, medicSkills: action.payload.medicSkillsPayload, paperMoney: action.payload.paperMoneyPayload, tripPlan: action.payload.tripPlanPayload, groupMembers: action.payload.groupMembersPayload, intentions: action.payload.intentionsPayload, waterFoodSupply: action.payload.waterFoodSupplyPayload, survivalEquipment: action.payload.survivalEquipmentPayload, attachments: action.payload.attachmentsPayload, thisIsOurDate: action.payload.thisIsOurDatePayload,
        };
        default: throw new Error("Unknown action");
    }
}

/* //////////////////////////////////////////////////
TRAVEL FORM GENERATOR PAGE COMPONENT
////////////////////////////////////////////////// */
export default function PageForm() {
    /* //////////////////////////////////////////////////
    FORM useReducer
    ////////////////////////////////////////////////// */
    const [state, dispatch] = useReducer(reducer, initialState);

    /* //////////////////////////////////////////////////
    Function to scroll to top or an id
    ////////////////////////////////////////////////// */
    function ScrollTo(where, behavior = 'auto', block = 'start'){
        /* TOP */
        if(where === 'top') {
            window.scrollTo({
                top: 0,
                behavior: behavior,
            });
        }

        /* ID */
        if(where !== 'top' && where) {
            const whereToScroll = document.getElementById(where);
            if (whereToScroll) {
              whereToScroll.scrollIntoView({ behavior: behavior, block: block }); // Adjusted block to 'start' for better alignment
            } 
        }
    }

    /* //////////////////////////////////////////////////
    useEffect scroll to top at component mount
    ////////////////////////////////////////////////// */
    useEffect(() => {
        ScrollTo('top');
    }, []);

    /* //////////////////////////////////////////////////
    useEffect to detect page refresh or leave and ask user for a confirmation
    ////////////////////////////////////////////////// */
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            const confirmationMessage = 'Form will be lost. Are you sure you want to leave?';
            e.preventDefault();
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className="bg-colorBackground min-h-screen flex flex-col justify-between">
            <Container containerID="form">
                <NavBar />
                <SectionForm state={state} dispatch={dispatch} ScrollTo={ScrollTo}  />
                <ControlArrowUp ScrollTo={ScrollTo}/>
                {/* <PDFViewer className="w-[100%] h-screen" showToolbar={true}>
                    <SectionDocument state={state} />
                </PDFViewer> */}
                <FooterBar/>
            </Container>
        </div>
    )
}

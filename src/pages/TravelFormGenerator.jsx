import { useEffect, useReducer } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../components/MyDocument';
import TravelForm from '../components/TravelForm';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ControlArrowUp from "../components/ControlArrowUp";

// Initial State of the form
const initialState = {
    fullName: "",
    sexe: "",
    dob: "",
    nationality: "",
    etd: "",
    eta: "",
    height: "",
    weight: "",
    hair: "",
    distinctive: "",
    travelOutfit: "",
    bloodtype: "",
    // importantMedication: "",
    currentMedication: "",
    medicalDevices: "",
    allergies: "",
    psyCondition: "",
    otherMedicalInfos: "",
    driverLicence: "",
    vehicleTypeColor: "",
    vehicleReg: "",
    vehicleRentalAgency: "",
    telephone: "",
    communicationDevices: "",
    checkInReport: "",
    signalCoverage: "",
    staying: "",
    contacts: "",
    autostop: "",
    drinkingHabit: "",
    smokingHabit: "",
    drugUseHabit: "",
    personalityTrait: "",
    trustLevel: "",
    confidence: "",
    hobbies: "",
    languages: "",
    fitnessCondition: "",
    swimming: "",
    // outdoorSkill: "",
    hikingExperience: "",
    survivalSkills: "",
    militaryExperience: "",
    fightingSkills: "",
    medicSkills: "",
    paperMoney: "",
    tripPlan: "",
    groupMembers: "",
    intentions: "",
    waterFoodSuply: "",
    survivalEquipment: "",
    attachments: "",
    thisIsOurDate: "",
}

// Reducer for the form
function reducer(state, action) {
    switch(action.type) {
        case "formSubmitted": return {
          ...state,
          fullName: action.payload.fullNamePayload,
          sexe: action.payload.sexePayload,
          dob: action.payload.dobPayload,
          nationality: action.payload.nationalityPayload,
          etd: action.payload.etdPayload,
          eta: action.payload.etaPayload,
          height: action.payload.heightPayload,
          weight: action.payload.weightPayload,
          hair: action.payload.hairPayload,
          distinctive: action.payload.distinctivePayload,
          travelOutfit: action.payload.travelOutfitPayload,
          bloodtype: action.payload.bloodtypePayload,
        //   importantMedication: action.payload.importantMedicationPayload,
          currentMedication: action.payload.currentMedicationPayload,
          medicalDevices: action.payload.medicalDevicesPayload,
          allergies: action.payload.allergiesPayload,
          psyCondition: action.payload.psyConditionPayload,
          otherMedicalInfos: action.payload.otherMedicalInfosPayload,
          driverLicence: action.payload.driverLicencePayload,
          vehicleTypeColor: action.payload.vehicleTypeColorPayload,
          vehicleReg: action.payload.vehicleRegPayload,
          vehicleRentalAgency: action.payload.vehicleRentalAgencyPayload,
          telephone: action.payload.telephonePayload,
          communicationDevices: action.payload.communicationDevicesPayload,
          checkInReport: action.payload.checkInReportPayload,
          signalCoverage: action.payload.signalCoveragePayload,
          staying: action.payload.stayingPayload,
          contacts: action.payload.contactsPayload,
          autostop: action.payload.autostopPayload,
          drinkingHabit: action.payload.drinkingHabitPayload,
          smokingHabit: action.payload.smokingHabitPayload,
          drugUseHabit: action.payload.drugUseHabitPayload,
          personalityTrait: action.payload.personalityTraitPayload,
          trustLevel: action.payload.trustLevelPayload,
          confidence: action.payload.confidencePayload,
          hobbies: action.payload.hobbiesPayload,
          languages: action.payload.languagesPayload,
          fitnessCondition: action.payload.fitnessConditionPayload,
          swimming: action.payload.swimmingPayload,
        //   outdoorSkill: action.payload.outdoorSkillPayload,
          hikingExperience: action.payload.hikingExperiencePayload,
          survivalSkills: action.payload.survivalSkillsPayload,
          militaryExperience: action.payload.militaryExperiencePayload,
          fightingSkills: action.payload.fightingSkillsPayload,
          medicSkills: action.payload.medicSkillsPayload,
          paperMoney: action.payload.paperMoneyPayload,
          tripPlan: action.payload.tripPlanPayload,
          groupMembers: action.payload.groupMembersPayload,
          intentions: action.payload.intentionsPayload,
          waterFoodSupply: action.payload.waterFoodSupplyPayload,
          survivalEquipment: action.payload.survivalEquipmentPayload,
          attachments: action.payload.attachmentsPayload,
          thisIsOurDate: action.payload.thisIsOurDatePayload,
        };
        default: throw new Error("Unknown action");
    }
}

export default function TravelFormGenerator() {
    // useReducer for the form
    const [state, dispatch] = useReducer(reducer, initialState);

    // Scroll quickly to the top of the page
    function ScrollToTop(){
        window.scrollTo({
            top: 0,
        });
    }

    // Scroll smoothly to the id of the PDV viewer
    function ScrollToDocumentSmoothly() {
        const documentViewerGenerated = document.getElementById('documentViewerGenerated');
        if (documentViewerGenerated) {
          documentViewerGenerated.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjusted block to 'start' for better alignment
        }
      }
    
    // Scroll smoothly to the top of the page
    function ScrollToTopSmoothly(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // When the page is mounted, the view scroll to top
    useEffect(() => {
        ScrollToTop();
    }, []);

    // Before unload ask for confirmation to leave or refresh the page manually
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            const confirmationMessage = 'Form will be lost. Are you sure you want to leave?';
            e.preventDefault(); // Most browsers still require this for a custom dialog
            e.returnValue = confirmationMessage; // This custom message will not be shown in most modern browsers
            return confirmationMessage; // This is necessary for older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // JSX
    return (
        <div className="bg-dark3 min-h-screen flex flex-col justify-between">
            <Header/>
            <Container>
                <TravelForm state={state} dispatch={dispatch} ScrollToDocumentSmoothly={ScrollToDocumentSmoothly} ScrollToTopSmoothly={ScrollToTopSmoothly} />
            </Container>
            <Container containerID={'documentViewerGenerated'}>
                <PDFViewer className="w-[100%] h-screen" showToolbar={true}>
                    <MyDocument state={state} />
                </PDFViewer>
            </Container>
            <ControlArrowUp ScrollToTopSmoothly={ScrollToTopSmoothly}/>
            <Footer/>
        </div>
    )
}

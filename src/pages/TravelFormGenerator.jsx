/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { useEffect, useReducer } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import Header from "../components/Header";
import Container from "../components/Container";
import TravelForm from '../components/TravelForm';
import MyDocument from '../components/MyDocument';
import Footer from "../components/Footer";
import ControlArrowUp from "../components/ControlArrowUp";

/* //////////////////////////////////////////////////
FORM INITIAL STATE
////////////////////////////////////////////////// */ 
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

/* //////////////////////////////////////////////////
FORM REDUCER
////////////////////////////////////////////////// */ 
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

/* //////////////////////////////////////////////////
TRAVEL FORM GENERATOR PAGE COMPONENT
////////////////////////////////////////////////// */
export default function TravelFormGenerator() {
    /* //////////////////////////////////////////////////
    FORM useReducer
    ////////////////////////////////////////////////// */
    const [state, dispatch] = useReducer(reducer, initialState);

    /* //////////////////////////////////////////////////
    Function to scroll to top or an id
    ////////////////////////////////////////////////// */
    function ScrollTo(where, behavior = 'auto'){
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
              whereToScroll.scrollIntoView({ behavior: behavior, block: 'start' }); // Adjusted block to 'start' for better alignment
            } 
        }
    }

    /* //////////////////////////////////////////////////
    Function to scroll quickly to top or to an element
    ////////////////////////////////////////////////// */
    // function ScrollToTop(){
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto',
    //     });
    // }

    /* //////////////////////////////////////////////////
    Function to scroll smoothly to top or to an element
    ////////////////////////////////////////////////// */
    // function ScrollToDocumentSmoothly() {
    //     const documentViewerGenerated = document.getElementById('documentViewerGenerated');
    //     if (documentViewerGenerated) {
    //       documentViewerGenerated.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjusted block to 'start' for better alignment
    //     }
    //   }
    
    // Scroll smoothly to the top of the page
    // function ScrollToTopSmoothly(){
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }

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
        <div className="bg-darkBackground min-h-screen flex flex-col justify-between">
            <Header/>
            <Container>
                <TravelForm state={state} dispatch={dispatch} ScrollTo={ScrollTo}  />
            </Container>
            <Container containerID={'pdfviewer'}>
                <PDFViewer className="w-[100%] h-screen" showToolbar={true}>
                    <MyDocument state={state} />
                </PDFViewer>
            </Container>
            <ControlArrowUp ScrollTo={ScrollTo}/>
            <Footer/>
        </div>
    )
}

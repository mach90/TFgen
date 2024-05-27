import { useEffect, useReducer } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../components/MyDocument';
import TravelForm from '../components/TravelForm';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const initialState = {
    fullName: "",
    sexe: "",
    dob: "",
    nationality: "",
    height: null,
    weight: null,
    hair: "",
    distinctive: "",
    travelOutfit: "",
    bloodtype: "",
    importantMedication: "",
    currentMedication: "",
    medicalDevices: "",
    allergies: "",
    psyCondition: "",
    otherMedicalInfos: "",
    driverLicence: "",
    vehicleTypeColor: "",
    vehicleReg: "",
    vehicleRentalAgency: "",
    telephone: null,
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
    outdoorSkill: "",
    hikingExperience: "",
    survivalSkills: "",
    militaryExperience: "",
    fightingSkills: "",
    medicSkills: "",
    paperMoney: "",
    tripPlan: "",
    groupMembers: "",
    intentions: "",
    equipment: "",
    survivalEquipment: "",
    joinedDocuments: "",
    thisIsOurDate: "",
}

function reducer(state, action) {
    switch(action.type) {
        case "formSubmitted": return {
          ...state,
          fullName: action.payload.fullNamePayload,
          sexe: action.payload.sexePayload,
          dob: action.payload.dobPayload,
          nationality: action.payload.nationalityPayload,
          height: action.payload.heightPayload,
          weight: action.payload.weightPayload,
          hair: action.payload.hairPayload,
          distinctive: action.payload.distinctivePayload,
          travelOutfit: action.payload.travelOutfitPayload,
          bloodtype: action.payload.bloodtypePayload,
          importantMedication: action.payload.importantMedicationPayload,
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
          outdoorSkill: action.payload.outdoorSkillPayload,
          hikingExperience: action.payload.hikingExperiencePayload,
          survivalSkills: action.payload.survivalSkillsPayload,
          militaryExperience: action.payload.militaryExperiencePayload,
          fightingSkills: action.payload.fightingSkillsPayload,
          medicSkills: action.payload.medicSkillsPayload,
          paperMoney: action.payload.paperMoneyPayload,
          tripPlan: action.payload.tripPlanPayload,
          groupMembers: action.payload.groupMembersPayload,
          intentions: action.payload.intentionsPayload,
          equipment: action.payload.equipmentPayload,
          survivalEquipment: action.payload.survivalEquipmentPayload,
          joinedDocuments: action.payload.joinedDocumentsPayload,
          thisIsOurDate: action.payload.thisIsOurDatePayload,
        };
        default: throw new Error("Unknown action");
    }
}

export default function TravelFormGenerator() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function ScrollToTop(){
        window.scrollTo({
            top: 0,
        });
    }

    function ScrollToTopSmoothly(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    function ScrollToDocumentSmoothly() {
        const hophophop = document.getElementById('hophophop');
        console.log('Element:', hophophop); // Check if element is retrieved
        if (hophophop) {
          hophophop.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjusted block to 'start' for better alignment
        }
      }

    useEffect(() => {
        ScrollToTop();
    }, []);

    return (
        <div className="bg-dark3 min-h-screen flex flex-col justify-between">
            <Header/>
            <Container>
                <TravelForm dispatch={dispatch} ScrollToDocumentSmoothly={ScrollToDocumentSmoothly} ScrollToTopSmoothly={ScrollToTopSmoothly} />
            </Container>
            <Container containerID={'hophophop'}>
                <PDFViewer Toolbar={true} className="w-[100%] h-screen">
                    <MyDocument state={state} />
                </PDFViewer>
            </Container>
            <Footer/>
        </div>
    )
}

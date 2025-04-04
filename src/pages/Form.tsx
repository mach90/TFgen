//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useReducer } from "react";
import Container from "../ui/Container";
import SectionForm from "../features/form/SectionForm";
import ControlArrowUp from "../ui/ControlArrowUp";
import ScrollTo from "../utils/scrollTo";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// INTERFACES/TYPES
//////////////////////////////////////////////////////////////////////////////////////////////////////
export interface State {
    fullName: string;
    sexe: string;
    dob: string;
    nationality: string;
    ethnicity: string;
    etd: string;
    eta: string;
    height: number;
    weight: number;
    hair: string;
    distinctive: string;
    travelOutfit: string;
    bloodtype: string;
    currentMedication: string;
    medicalDevices: string;
    allergies: string;
    psyCondition: string;
    otherMedicalInfos: string;
    driverLicence: string;
    vehicleTypeColor: string;
    vehicleReg: string;
    vehicleRentalAgency: string;
    telephone: string;
    communicationDevices: string;
    checkInReport: string;
    signalCoverage: string;
    staying: string;
    contacts: string;
    autostop: string;
    drinkingHabit: string;
    smokingHabit: string;
    drugUseHabit: string;
    personalityTrait: string;
    trustLevel: string;
    confidence: string;
    hobbies: string;
    languages: string;
    fitnessCondition: string;
    swimming: string;
    hikingExperience: string;
    survivalSkills: string;
    militaryExperience: string;
    fightingSkills: string;
    medicSkills: string;
    paperMoney: string;
    tripPlan: string;
    groupMembers: string;
    intentions: string;
    waterFoodSupply: string;
    survivalEquipment: string;
    attachments: string;
    thisIsOurDate: string;
}

export interface Action {
    type: "formSubmitted";
    payload: {
      fullNamePayload: string;
      sexePayload: string;
      dobPayload: string;
      nationalityPayload: string;
      ethnicityPayload: string;
      etdPayload: string;
      etaPayload: string;
      heightPayload: number;
      weightPayload: number;
      hairPayload: string;
      distinctivePayload: string;
      travelOutfitPayload: string;
      bloodtypePayload: string;
      currentMedicationPayload: string;
      medicalDevicesPayload: string;
      allergiesPayload: string;
      psyConditionPayload: string;
      otherMedicalInfosPayload: string;
      driverLicencePayload: string;
      vehicleTypeColorPayload: string;
      vehicleRegPayload: string;
      vehicleRentalAgencyPayload: string;
      telephonePayload: string;
      communicationDevicesPayload: string;
      checkInReportPayload: string;
      signalCoveragePayload: string;
      stayingPayload: string;
      contactsPayload: string;
      autostopPayload: string;
      drinkingHabitPayload: string;
      smokingHabitPayload: string;
      drugUseHabitPayload: string;
      personalityTraitPayload: string;
      trustLevelPayload: string;
      confidencePayload: string;
      hobbiesPayload: string;
      languagesPayload: string;
      fitnessConditionPayload: string;
      swimmingPayload: string;
      hikingExperiencePayload: string;
      survivalSkillsPayload: string;
      militaryExperiencePayload: string;
      fightingSkillsPayload: string;
      medicSkillsPayload: string;
      paperMoneyPayload: string;
      tripPlanPayload: string;
      groupMembersPayload: string;
      intentionsPayload: string;
      waterFoodSupplyPayload: string;
      survivalEquipmentPayload: string;
      attachmentsPayload: string;
      thisIsOurDatePayload: string;
    };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORM INITIAL STATE
//////////////////////////////////////////////////////////////////////////////////////////////////////
const initialState: State = {
    fullName: "",
    sexe: "",
    dob: "",
    nationality: "",
    ethnicity: "",
    etd: "",
    eta: "",
    height: 0,
    weight: 0,
    hair: "",
    distinctive: "",
    travelOutfit: "",
    bloodtype: "",
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
    hikingExperience: "",
    survivalSkills: "",
    militaryExperience: "",
    fightingSkills: "",
    medicSkills: "",
    paperMoney: "",
    tripPlan: "",
    groupMembers: "",
    intentions: "",
    waterFoodSupply: "",
    survivalEquipment: "",
    attachments: "",
    thisIsOurDate: "",
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORM REDUCER
//////////////////////////////////////////////////////////////////////////////////////////////////////
function reducer(state: State, action: Action) {
    switch(action.type) {
        case "formSubmitted": return {
          ...state, 
          fullName: action.payload.fullNamePayload, 
          sexe: action.payload.sexePayload, 
          dob: action.payload.dobPayload, 
          nationality: action.payload.nationalityPayload, 
          ethnicity: action.payload.ethnicityPayload,
          etd: action.payload.etdPayload,
          eta: action.payload.etaPayload,
          height: action.payload.heightPayload,
          weight: action.payload.weightPayload,
          hair: action.payload.hairPayload,
          distinctive: action.payload.distinctivePayload,
          travelOutfit: action.payload.travelOutfitPayload,
          bloodtype: action.payload.bloodtypePayload,
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// TRAVEL FORM GENERATOR PAGE COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
   
    useEffect(() => {
        ScrollTo("top");
    }, []);

    return (
        <Container containerID="form">
            <SectionForm state={state} dispatch={dispatch}/>
            <ControlArrowUp />
        </Container>
    )
}
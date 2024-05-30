import { Users, BookUser, Fingerprint, PersonStanding, ClipboardPlus, Car, Bed, RadioTower, Drama, CandlestickChart, Backpack, Route, RouteOff, Paperclip, FileText, Trash2, CalendarClock, Download} from 'lucide-react';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import NavButton from './NavButton';
import MyDocument from './MyDocument';

export default function TravelForm({state, dispatch, ScrollToDocumentSmoothly, ScrollToTopSmoothly}) {
  // TailwindCSS classes for form elements
  const formFieldset = "bg-dark1 px-4 py-6 rounded-md text-sm font-semibold flex flex-col gap-1 my-8 shadow-lg shadow-gray-950/50";
  const formLegend = "text-teal-600 bg-dark1 px-4 py-2 rounded-lg flex gap-2 items-center";
  const formLabel = "text-gray-500 text-start";
  const formInput = "bg-dark3 text-bright1 p-2";
  const formSelect = "bg-dark3 text-bright1 p-2";
  const formButton = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2";

  const [editing, setEditing] = useState(true);

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();
    // PAYLOAD
    const formPayload = {
      fullNamePayload: e.target.fullNameInput.value,
      sexePayload: e.target.sexeInput.value,
      dobPayload: e.target.dobInput.value,
      nationalityPayload: e.target.nationalityInput.value,
      etdPayload: e.target.etdInput.value,
      etaPayload: e.target.etaInput.value,
      heightPayload: e.target.heightInput.value,
      weightPayload: e.target.weightInput.value,
      hairPayload: e.target.hairInput.value,
      distinctivePayload: e.target.distinctiveInput.value,
      travelOutfitPayload: e.target.travelOutfitInput.value,
      bloodtypePayload: e.target.bloodtypeInput.value,
      // importantMedicationPayload: e.target.importantMedicationInput.value,
      currentMedicationPayload: e.target.currentMedicationInput.value,
      medicalDevicesPayload: e.target.medicalDevicesInput.value,
      allergiesPayload: e.target.allergiesInput.value,
      psyConditionPayload: e.target.psyConditionInput.value,
      otherMedicalInfosPayload: e.target.otherMedicalInfosInput.value,
      driverLicencePayload: e.target.driverLicenceInput.value,
      vehicleTypeColorPayload: e.target.vehicleTypeColorInput.value,
      vehicleRegPayload: e.target.vehicleRegInput.value,
      vehicleRentalAgencyPayload: e.target.vehicleRentalAgencyInput.value,
      telephonePayload: e.target.telephoneInput.value,
      communicationDevicesPayload: e.target.communicationDevicesInput.value,
      checkInReportPayload: e.target.checkInReportInput.value,
      signalCoveragePayload: e.target.signalCoverageInput.value,
      stayingPayload: e.target.stayingInput.value,
      contactsPayload: e.target.contactsInput.value,
      autostopPayload: e.target.autostopInput.value,
      drinkingHabitPayload: e.target.drinkingHabitInput.value,
      smokingHabitPayload: e.target.smokingHabitInput.value,
      drugUseHabitPayload: e.target.drugUseHabitInput.value,
      personalityTraitPayload: e.target.personalityTraitInput.value,
      trustLevelPayload: e.target.trustLevelInput.value,
      confidencePayload: e.target.confidenceInput.value,
      hobbiesPayload: e.target.hobbiesInput.value,
      languagesPayload: e.target.languagesInput.value,
      fitnessConditionPayload: e.target.fitnessConditionInput.value,
      swimmingPayload: e.target.swimmingInput.value,
      // outdoorSkillPayload: e.target.outdoorSkillInput.value,
      hikingExperiencePayload: e.target.hikingExperienceInput.value,
      survivalSkillsPayload: e.target.survivalSkillsInput.value,
      militaryExperiencePayload: e.target.militaryExperienceInput.value,
      fightingSkillsPayload: e.target.fightingSkillsInput.value,
      medicSkillsPayload: e.target.medicSkillsInput.value,
      paperMoneyPayload: e.target.paperMoneyInput.value,
      tripPlanPayload: e.target.tripPlanInput.value,
      groupMembersPayload: e.target.groupMembersInput.value,
      intentionsPayload: e.target.intentionsInput.value,
      waterFoodSupplyPayload: e.target.waterFoodSupplyInput.value,
      survivalEquipmentPayload: e.target.survivalEquipmentInput.value,
      attachmentsPayload: e.target.attachmentsInput.value,
      thisIsOurDatePayload: new Date(Date.now()).toISOString(),
    }
    // DISPATCH
    dispatch({type: "formSubmitted", payload: formPayload});
    // EDITING STATE CHANGE
    setEditing(false);
  }

  // Reset form
  function resetForm(e){
    const formRoot = e.target.closest('.formRoot');
    e.preventDefault();
    // PAYLOAD
    const resetPayload = {
      fullNamePayload: "",
      sexePayload: "",
      dobPayload: "",
      nationalityPayload: "",
      etdPayload: "",
      etaPayload: "",
      heightPayload: "",
      weightPayload: "",
      hairPayload: "",
      distinctivePayload: "",
      travelOutfitPayload: "",
      bloodtypePayload: "",
      // importantMedicationPayload: "",
      currentMedicationPayload: "",
      medicalDevicesPayload: "",
      allergiesPayload: "",
      psyConditionPayload: "",
      otherMedicalInfosPayload: "",
      driverLicencePayload: "",
      vehicleTypeColorPayload: "",
      vehicleRegPayload: "",
      vehicleRentalAgencyPayload: "",
      telephonePayload: "",
      communicationDevicesPayload: "",
      checkInReportPayload: "",
      signalCoveragePayload: "",
      stayingPayload: "",
      contactsPayload: "",
      autostopPayload: "",
      drinkingHabitPayload: "",
      smokingHabitPayload: "",
      drugUseHabitPayload: "",
      personalityTraitPayload: "",
      trustLevelPayload: "",
      confidencePayload: "",
      hobbiesPayload: "",
      languagesPayload: "",
      fitnessConditionPayload: "",
      swimmingPayload: "",
      // outdoorSkillPayload: "",
      hikingExperiencePayload: "",
      survivalSkillsPayload: "",
      militaryExperiencePayload: "",
      fightingSkillsPayload: "",
      medicSkillsPayload: "",
      paperMoneyPayload: "",
      tripPlanPayload: "",
      groupMembersPayload: "",
      intentionsPayload: "",
      equipmentPayload: "",
      survivalEquipmentPayload: "",
      attachmentsPayload: "",
      thisIsOurDatePayload: "",
    }
    // DISPATCH
    dispatch({type: "formSubmitted", payload: resetPayload});
    // FORM INPUT RESET
    formRoot.fullNameInput.value = "";
    formRoot.sexeInput.value = "";
    formRoot.dobInput.value = "";
    formRoot.nationalityInput.value = "";
    formRoot.etdInput.value = "";
    formRoot.etaInput.value = "";
    formRoot.heightInput.value = "";
    formRoot.weightInput.value = "";
    formRoot.hairInput.value = "";
    formRoot.distinctiveInput.value = "";
    formRoot.travelOutfitInput.value = "";
    formRoot.bloodtypeInput.value = "";
    // formRoot.importantMedicationInput.value = "";
    formRoot.currentMedicationInput.value = "";
    formRoot.medicalDevicesInput.value = "";
    formRoot.allergiesInput.value = "";
    formRoot.psyConditionInput.value = "";
    formRoot.otherMedicalInfosInput.value = "";
    formRoot.driverLicenceInput.value = "";
    formRoot.vehicleTypeColorInput.value = "";
    formRoot.vehicleRegInput.value = "";
    formRoot.vehicleRentalAgencyInput.value = "";
    formRoot.telephoneInput.value = "";
    formRoot.communicationDevicesInput.value = "";
    formRoot.checkInReportInput.value = "";
    formRoot.signalCoverageInput.value = "";
    formRoot.stayingInput.value = "";
    formRoot.contactsInput.value = "";
    formRoot.autostopInput.value = "";
    formRoot.drinkingHabitInput.value = "";
    formRoot.smokingHabitInput.value = "";
    formRoot.drugUseHabitInput.value = "";
    formRoot.personalityTraitInput.value = "";
    formRoot.trustLevelInput.value = "";
    formRoot.confidenceInput.value = "";
    formRoot.hobbiesInput.value = "";
    formRoot.languagesInput.value = "";
    formRoot.fitnessConditionInput.value = "";
    formRoot.swimmingInput.value = "";
    // formRoot.outdoorSkillInput.value = "";
    formRoot.hikingExperienceInput.value = "";
    formRoot.survivalSkillsInput.value = "";
    formRoot.militaryExperienceInput.value = "";
    formRoot.fightingSkillsInput.value = "";
    formRoot.medicSkillsInput.value = "";
    formRoot.paperMoneyInput.value = "";
    formRoot.tripPlanInput.value = "";
    formRoot.groupMembersInput.value = "";
    formRoot.intentionsInput.value = "";
    formRoot.waterFoodSupplyInput.value = "";
    formRoot.survivalEquipmentInput.value = "";
    formRoot.attachmentsInput.value = "";
    // EDITING STATE
    setEditing(true);

    // SCROLL
    ScrollToTopSmoothly();
  }
  
  // Detect form edition
  function detectEdition(){
    if(editing === false) setEditing(true);
  }

  // JSX
  return (
    <div className='gap-4 w-[100%]'>
      <div className="text-bright1 text-center bg-dark3 p-4 mb-10 rounded-md border border-bright1">
        <p><strong>This app does not collect or store any informations.</strong></p>
        <p>PDF document is not processed or saved anywhere except in your browser and computer.</p>
        <p><strong>Share copies to trusted contacts only.</strong></p>
        <p><strong>Keep one copy with you, secured.</strong></p>
      </div>

      <form className="flex flex-col items-stretch formRoot" onSubmit={(e) => handleSubmit(e)} onChange={detectEdition}>
        <fieldset className={formFieldset}>
          <legend className={formLegend}><Fingerprint/>IDENTITY</legend>
          <label className={formLabel} htmlFor="fullNameInput">Full Name</label>
          <input className={formInput} id="fullNameInput" type="text"></input>

          <label className={formLabel} htmlFor="sexeInput">Biological sexe</label>
          <select className={formSelect} id="sexeInput" defaultValue="">
            <option value=""></option>
            <option id="sexeInput1" value="Male">Male</option>
            <option id="sexeInput2" value="Female">Female</option>
          </select>

          <label className={formLabel} htmlFor="dobInput">Date of Birth</label>
          <input className={formInput} id="dobInput" type="date"></input>

          <label className={formLabel} htmlFor="nationalityInput">Nationality</label>
          <input className={formInput} id="nationalityInput" type="text"></input>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><CalendarClock />LEAVE AND RETURN DATES</legend>
          <label className={formLabel} htmlFor="etdInput">Leaving date</label>
          <input className={formInput} id="etdInput" type="datetime-local"></input>

          <label className={formLabel} htmlFor="etaInput">Return date</label>
          <input className={formInput} id="etaInput" type="datetime-local"></input>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><PersonStanding />APPEARANCE</legend>

          <label className={formLabel} htmlFor="heightInput">Height (CM)</label>
          <input className={formInput} id="heightInput" type="number"></input>

          <label className={formLabel} htmlFor="weightInput">Weight (KG)</label>
          <input className={formInput} id="weightInput" type="number"></input>

          <label className={formLabel} htmlFor="hairInput">Hair (color and length)</label>
          <input className={formInput} id="hairInput" type="text" placeholder="(ie. crewcut, brown)"></input>

          <label className={formLabel} htmlFor="distinctiveInput">Distinctive signs (glasses, tattoes, scars etc.)</label>
          <textarea className={formInput} id="distinctiveInput" type="text" placeholder="(ie. glasses, tribal tattoo right arm)"></textarea>

          <label className={formLabel} htmlFor="travelOutfitInput">Travel outfit</label>
          <textarea className={formInput} id="travelOutfitInput" type="text" placeholder="(ie. hiking pant, hiking boot MT900, fleece)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><ClipboardPlus />MEDICAL</legend>

            <label className={formLabel} htmlFor="bloodtypeInput">Bloodtype</label>
            <select className={formSelect} id="bloodtypeInput" defaultValue="">
              <option value=""></option>
              <option id="bloodtypeInput1" value="Apos">A+</option>
              <option id="bloodtypeInput2" value="Aneg">A-</option>
              <option id="bloodtypeInput3" value="Bpos">B+</option>
              <option id="bloodtypeInput4" value="Bneg">B-</option>
              <option id="bloodtypeInput5" value="ABpos">AB+</option>
              <option id="bloodtypeInput6" value="ABneg">AB-</option>
              <option id="bloodtypeInput7" value="Opos">O+</option>
              <option id="bloodtypeInput8" value="Oneg">O-</option>
            </select>

            {/* <label className={formLabel} htmlFor="importantMedicationInput">Important medication</label>
            <textarea className={formInput} id="importantMedicationInput" type="text"></textarea> */}

            <label className={formLabel} htmlFor="currentMedicationInput">Current medication</label>
            <textarea className={formInput} id="currentMedicationInput" type="text"></textarea>

            <label className={formLabel} htmlFor="medicalDevicesInput">Medical devices</label>
            <textarea className={formInput} id="medicalDevicesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="allergiesInput">Allergies</label>
            <textarea className={formInput} id="allergiesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="psyConditionInput">Mental state and psychological condition</label>
            <textarea className={formInput} id="psyConditionInput" type="text"></textarea>

            <label className={formLabel} htmlFor="otherMedicalInfosInput">Other useful medical informations</label>
            <textarea className={formInput} id="otherMedicalInfosInput" type="text"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Car />VEHICLES</legend>

            <label className={formLabel} htmlFor="driverLicenceInput">Driver licence</label>
            <select className={formSelect} id="driverLicenceInput" defaultValue="">
              <option value=""></option>
              <option id="driverInput1" value="No">No</option>
              <option id="driverInput2" value="Yes">Yes</option>
            </select>

            <label className={formLabel} htmlFor="vehicleTypeColorInput">Vehicle(s) (make, model and color)</label>
            <input className={formInput} id="vehicleTypeColorInput" type="text" placeholder="(ie. white toyota corolla 2014)"></input>

            <label className={formLabel} htmlFor="vehicleRegInput">Vehicle(s) registration</label>
            <input className={formInput} id="vehicleRegInput" type="text"></input>

            <label className={formLabel} htmlFor="vehicleRentalAgencyInput">Rental informations (agencies and dates)</label>
            <textarea className={formInput} id="vehicleRentalAgencyInput" type="text" placeholder="(ie. BlueRental Keflavik Airport from sept 9 to sept 15)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><RadioTower />COMMUNICATION</legend>

          <label className={formLabel} htmlFor="telephoneInput">Phone number</label>
          <input className={formInput} type="tel" name="phone" id="telephoneInput" placeholder="+"></input>

          <label className={formLabel} htmlFor="communicationDevicesInput">Communication devices</label>
          <textarea className={formInput} id="communicationDevicesInput" type="text" placeholder="(ie. iPhone 10, 1 talkie MRS-10T)"></textarea>

          <label className={formLabel} htmlFor="checkInReportInput">Check in reports (when, to who)</label>
          <textarea className={formInput} id="checkInReportInput" type="text" placeholder="(ie. Check in with my family every evening at 8 PM.)"></textarea>

          <label className={formLabel} htmlFor="signalCoverageInput">Signal coverage expected</label>
          <textarea className={formInput} id="signalCoverageInput" type="text" placeholder="(ie. Checked, good coverage except for a portion of the road near the glacier)"></textarea>

        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Bed />STAYING</legend>

          <label className={formLabel} htmlFor="stayingInput">Hotels, campsites (infos and dates)</label>
          <textarea className={formInput} id="stayingInput" type="text" placeholder="(ie. Accord hotel Reykjavik sept9 to sept10 then campsites along the road)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><BookUser />RELATIVES/EMERGENCY CONTACTS</legend>

          <label className={formLabel} htmlFor="contactsInput">Who to contact (name, phone, relation)</label>
          <textarea className={formInput} id="contactsInput" type="text"></textarea>

        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Drama />PERSONALITY AND BEHAVIOR</legend>

          <label className={formLabel} htmlFor="autostopInput">Autostop</label>
          <select className={formSelect} id="autostopInput" defaultValue="">
            <option value=""></option>
            <option id="autostopInput1" value="Will never do">Will never do</option>
            <option id="autostopInput2" value="Only as a last resort">Only as a last resort</option>
            <option id="autostopInput3" value="Considered, if needed">Considered if needed</option>
          </select>

          <label className={formLabel} htmlFor="drinkingHabitInput">Drinking Habit</label>
          <select className={formSelect} id="drinkingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drinkingHabitInput1" value="Never drinks">No alcohol</option>
            <option id="drinkingHabitInput2" value="Occasionnaly drinks">Occasionnally</option>
            <option id="drinkingHabitInput3" value="Regularly drinks">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="smokingHabitInput">Smoking Habit</label>
          <select className={formSelect} id="smokingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="smokingHabitInput1" value="Never smokes">No</option>
            <option id="smokingHabitInput2" value="Occasionnaly smokes">Occasionnally</option>
            <option id="smokingHabitInput3" value="Regularly smokes">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="drugUseHabitInput">Drug Use Habit</label>
          <select className={formSelect} id="drugUseHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drugUseHabitInput1" value="Never use drugs">No</option>
            <option id="drugUseHabitInput2" value="Occasionnaly use drugs">Occasionnally</option>
            <option id="drugUseHabitInput3" value="Regularly use drugs">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="personalityTraitInput">Personality Trait</label>
          <select className={formSelect} id="personalityTraitInput" defaultValue="">
            <option value=""></option>
            <option id="personalityTraitInput1" value="Very Extrovert (loves socializing)">Very Extrovert</option>
            <option id="personalityTraitInput2" value="Extrovert (enjoys socializing)">Extrovert</option>
            <option id="personalityTraitInput3" value="Ambivert (balance of introvert and extrovert)">Ambivert</option>
            <option id="personalityTraitInput4" value="Introvert (prefers solitude)">Introvert</option>
            <option id="personalityTraitInput5" value="Very Introvert (avoids socializing)">Very Introvert</option>
            <option id="personalityTraitInput6" value="Social Anxiety (anxious in social situations)">Social Anxiety</option>
          </select>

          <label className={formLabel} htmlFor="trustLevelInput">Trust Level</label>
          <select className={formSelect} id="trustLevelInput" defaultValue="">
            <option value=""></option>
            <option id="trustLevelInput1" value="Very Trusting (trusts easily)">Very Trusting</option>
            <option id="trustLevelInput2" value="Trusting (generally trusts people)">Trusting</option>
            <option id="trustLevelInput3" value="Cautiously Trusting (trusts with caution)">Cautiously Trusting</option>
            <option id="trustLevelInput4" value="Wary (hesitant to trust)">Wary</option>
            <option id="trustLevelInput5" value="Distrustful (rarely trusts)">Distrustful</option>
            <option id="trustLevelInput6" value="Very Distrustful (does not trust people at all)">Very Distrustful</option>
          </select>

          <label className={formLabel} htmlFor="confidenceInput">Cautiousness</label>
          <select className={formSelect} id="confidenceInput" defaultValue="">
            <option value=""></option>
            <option id="confidenceInput1" value="Reckless">Reckless</option>
            <option id="confidenceInput2" value="Adventurous">Adventurous</option>
            <option id="confidenceInput3" value="Moderate">Moderate</option>
            <option id="confidenceInput4" value="Cautious">Cautious</option>
            <option id="confidenceInput5" value="Very cautious">Very cautious</option>
          </select>

          <label className={formLabel} htmlFor="hobbiesInput">Hobbies</label>
          <textarea className={formInput} id="hobbiesInput" type="text"></textarea>

        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><CandlestickChart />SKILLS</legend>

          <label className={formLabel} htmlFor="languagesInput">Language(s) spoken (basic/fluent/native)</label>
          <textarea className={formInput} id="languagesInput" type="text"></textarea>

          <label className={formLabel} htmlFor="fitnessConditionInput">Fitness Condition</label>
          <select className={formSelect} id="fitnessConditionInput" defaultValue="">
            <option value=""></option>
            <option id="fitnessConditionInput1" value="Poor (low fitness level)">Poor</option>
            <option id="fitnessConditionInput2" value="Average (moderate fitness level)">Average</option>
            <option id="fitnessConditionInput3" value="Good (high fitness level)">Good</option>
            <option id="fitnessConditionInput4" value="Excellent (exceptional fitness level)">Excellent</option>
          </select>

          <label className={formLabel} htmlFor="swimmingInput">Swimming</label>
          <select className={formSelect} id="swimmingInput" defaultValue="">
            <option value=""></option>
            <option id="swimmingInput1" value="Can't swim">Non-Swimmer</option>
            <option id="swimmingInput2" value="Basic Swimmer (can swim basic strokes)">Basic Swimmer</option>
            <option id="swimmingInput3" value="Proficient Swimmer (strong swimming ability)">Proficient Swimmer</option>
            <option id="swimmingInput4" value="Expert Swimmer (highly skilled and confident in water)">Expert Swimmer</option>
          </select>

          {/* <label className={formLabel} htmlFor="outdoorSkillInput">Outdoor Skill/Experience</label>
          <select className={formSelect} id="outdoorSkillInput" defaultValue="">
            <option value=""></option>
            <option id="outdoorSkillInput1" value="Novice (limited outdoor experience)">Novice</option>
            <option id="outdoorSkillInput2" value="Intermediate (some outdoor experience)">Intermediate</option>
            <option id="outdoorSkillInput3" value="Experienced (well-versed in outdoor activities)">Experienced</option>
            <option id="outdoorSkillInput4" value="Expert (highly skilled and experienced outdoors)">Expert</option>
          </select> */}

          <label className={formLabel} htmlFor="hikingExperienceInput">Hiking Experience</label>
          <select className={formSelect} id="hikingExperienceInput" defaultValue="">
            <option value=""></option>
            <option id="hikingExperienceInput1" value="Novice (limited hiking experience)">Novice</option>
            <option id="hikingExperienceInput2" value="Intermediate (some hiking experience)">Intermediate</option>
            <option id="hikingExperienceInput3" value="Experienced (frequent hiker)">Experienced</option>
          </select>

          <label className={formLabel} htmlFor="survivalSkillsInput">Survival Skills</label>
          <select className={formSelect} id="survivalSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="survivalSkillsInput1" value="None">None</option>
            <option id="survivalSkillsInput2" value="Basic survival skills">Basic</option>
            <option id="survivalSkillsInput3" value="Intermediate survival skills">Intermediate</option>
            <option id="survivalSkillsInput4" value="Advanced survival skills">Advanced</option>
          </select>

          <label className={formLabel} htmlFor="fightingSkillsInput">Fighting ability</label>
          <select className={formSelect} id="fightingSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="fightingSkillsInput1" value="Never got into a fight">Never got into a fight</option>
            <option id="fightingSkillsInput2" value="Had a few altercations">Had a few altercations</option>
            <option id="fightingSkillsInput3" value="Got into a few real fight">Got into a few real fight</option>
            <option id="fightingSkillsInput4" value="Got into many real fight">Got into many real fight</option>
          </select>

          <label className={formLabel} htmlFor="militaryExperienceInput">Military Experience</label>
          <select className={formSelect} id="militaryExperienceInput" defaultValue="">
            <option value=""></option>
            <option id="militaryExperienceInput1" value="None">None</option>
            <option id="militaryExperienceInput2" value="Basic training">Basic training</option>
            <option id="militaryExperienceInput3" value="Served in the military">Served</option>
          </select>

          <label className={formLabel} htmlFor="medicSkillsInput">Medic Skills</label>
          <select className={formSelect} id="medicSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="medicSkillsInput1" value="None">None</option>
            <option id="medicSkillsInput2" value="Basic (rudimentary medical knowledge)">Basic</option>
            <option id="medicSkillsInput3" value="Intermediate (competent in basic medical procedures)">Intermediate</option>
            <option id="medicSkillsInput4" value="Advanced (proficient in advanced medical procedures)">Advanced</option>
          </select>

        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Users />GROUP MEMBERS</legend>

          <label className={formLabel} htmlFor="groupMembersInput">Group members (names, age, sexe, contact infos)</label>
          <textarea className={formInput} id="groupMembersInput" type="text"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Route />TRIP PLAN</legend>

          <label className={formLabel} htmlFor="paperMoneyInput">Paper money subsitance (days)</label>
          <input className={formInput} id="paperMoneyInput" type="text" placeholder="(ie. Enough for X days)"></input>

          <label className={formLabel} htmlFor="tripPlanInput">Day to day plan (stations, trails, roads, resting areas, landmarks, POIs etc.)</label>
          <textarea className={formInput} id="tripPlanInput" type="text" placeholder="(ie. Day1..... Day2.....)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><RouteOff />POTENTIAL ISSUES</legend>

          <label className={formLabel} htmlFor="intentionsInput">Planned decisions and actions for potential issues</label>
          <textarea className={formInput} id="intentionsInput" type="text" placeholder="(ie. What will you do if anything goes bad, backup plans for each step of the trip)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Backpack />EQUIPMENT</legend>

          <label className={formLabel} htmlFor="waterFoodSupplyInput">Water/Food supply (days)</label>
          <textarea className={formInput} id="waterFoodSupplyInput" type="text" placeholder="(ie. 2L water, 2 days of food)"></textarea>

          <label className={formLabel} htmlFor="survivalEquipmentInput">Survival equipment</label>
          <textarea className={formInput} id="survivalEquipmentInput" type="text" placeholder="(ie. Tent, Pocket knife, Water filter, First aid kit, Waterproof clothing, Firearm, Warm clothing, Signal mirror, Whistle, Matches/lighter, Stove w/fuel, Flashlight, GPS, Compass, Map, SPOT locator device, Avalanche beacon, Avalanche probe, Bear bangers, Bear spray, Life jacket etc.)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Paperclip />ATTACHMENTS</legend>
          <label className={formLabel} htmlFor="attachmentsInput">Attachments</label>
          <textarea className={formInput} id="attachmentsInput" type="text" placeholder="(ie. Map, detailed planning etc.)"></textarea>
        </fieldset>

        <div className='flex flex-row fixed bottom-5 right-5 gap-4 items-center justify-end w-auto bg-gray-700 p-2 rounded-md'>
          {editing && <button className={formButton} id="submitForm" type="submit" onClick={ScrollToDocumentSmoothly}>GENERATE <FileText /></button>}
          {!editing && 
            <PDFDownloadLink document={<MyDocument state={state}/>} fileName={`EPA-${state.thisIsOurDate}.pdf`}>
              {({ loading }) =>
                  loading ? <NavButton disabled>Generating document...</NavButton> : <NavButton active>DOWNLOAD <Download /></NavButton>
              }
            </PDFDownloadLink>}
          <button className="text-gray-300 bg-red-500 hover:bg-red-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2" id="resetForm" onClick={resetForm}><Trash2 /></button>
        </div>
      </form>
    </div>
  );
}
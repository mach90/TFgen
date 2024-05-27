import { Users, BookUser, Fingerprint, PersonStanding, ClipboardPlus, Car, Bed, RadioTower, Drama, CandlestickChart, Backpack, Route, RouteOff, Paperclip, FileText, ArrowUpFromDot} from 'lucide-react';
import { useEffect, useState } from 'react';


export default function TravelForm({dispatch, ScrollToDocumentSmoothly, ScrollToTopSmoothly}) {
  const formFieldset = "bg-dark1 px-4 py-6 rounded-md text-sm font-semibold flex flex-col gap-1 my-8 shadow-lg shadow-gray-950/50";
  const formLegend = "text-teal-600 bg-dark1 px-4 py-2 rounded-lg flex gap-2 items-center";
  const formLabel = "text-gray-500 text-start";
  const formInput = "bg-dark3 text-bright1 p-2";
  const formSelect = "bg-dark3 text-bright1 p-2";
  const formButton = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2";

  function handleSubmit(e) {
    e.preventDefault();
    const formPayload = {
      fullNamePayload: e.target.fullNameInput.value,
      sexePayload: e.target.sexeInput.value,
      dobPayload: e.target.dobInput.value,
      nationalityPayload: e.target.nationalityInput.value,
      heightPayload: e.target.heightInput.value,
      weightPayload: e.target.weightInput.value,
      hairPayload: e.target.hairInput.value,
      distinctivePayload: e.target.distinctiveInput.value,
      travelOutfitPayload: e.target.travelOutfitInput.value,
      bloodtypePayload: e.target.bloodtypeInput.value,
      importantMedicationPayload: e.target.importantMedicationInput.value,
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
      outdoorSkillPayload: e.target.outdoorSkillInput.value,
      hikingExperiencePayload: e.target.hikingExperienceInput.value,
      survivalSkillsPayload: e.target.survivalSkillsInput.value,
      militaryExperiencePayload: e.target.militaryExperienceInput.value,
      fightingSkillsPayload: e.target.fightingSkillsInput.value,
      medicSkillsPayload: e.target.medicSkillsInput.value,
      paperMoneyPayload: e.target.paperMoneyInput.value,
      tripPlanPayload: e.target.tripPlanInput.value,
      groupMembersPayload: e.target.groupMembersInput.value,
      intentionsPayload: e.target.intentionsInput.value,
      equipmentPayload: e.target.equipmentInput.value,
      survivalEquipmentPayload: e.target.survivalEquipmentInput.value,
      joinedDocumentsPayload: e.target.joinedDocumentsInput.value,
      thisIsOurDatePayload: new Date(Date.now()).toISOString(),
    }
    // console.log(formPayload);
    dispatch({type: "formSubmitted", payload: formPayload});
  }

  const [controlsVisibility, setControlsVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 400) {
        setControlsVisibility(true);
      } else {
        setControlsVisibility(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='gap-4 w-[100%]'>
      <div className="text-bright1 text-center bg-dark3 p-4 mb-10 rounded-md border border-bright1">
        <p>None of the informations you write bellow are saved anywhere.</p>
        <p>Generated pdf document is not saved anywhere.</p>
        <p>Share copies to trusted contacts only.</p>
        <p>Keep one copy with you, secured.</p>
      </div>

      <form className="flex flex-col items-stretch" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={formFieldset}>
          <legend className={formLegend}><Fingerprint/>IDENTITY</legend>
          <label className={formLabel} htmlFor="fullNameInput">Full Name (as appears on passeport)</label>
          <input className={formInput} id="fullNameInput" type="text"></input>

          <label className={formLabel} htmlFor="sexeInput">Biological sexe at birth</label>
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
          <legend className={formLegend}><PersonStanding />APPEARANCE</legend>

          <label className={formLabel} htmlFor="heightInput">Height (CM)</label>
          <input className={formInput} id="heightInput" type="number"></input>

          <label className={formLabel} htmlFor="weightInput">Weight (KG)</label>
          <input className={formInput} id="weightInput" type="number"></input>

          <label className={formLabel} htmlFor="hairInput">Hair (color and length)</label>
          <input className={formInput} id="hairInput" type="text" placeholder="(ie. crewcut, brown)"></input>

          <label className={formLabel} htmlFor="distinctiveInput">Distinctive (glasses, tattoes, scars etc.)</label>
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

            <label className={formLabel} htmlFor="importantMedicationInput">Important medication</label>
            <textarea className={formInput} id="importantMedicationInput" type="text"></textarea>

            <label className={formLabel} htmlFor="currentMedicationInput">Current medication</label>
            <textarea className={formInput} id="currentMedicationInput" type="text"></textarea>

            <label className={formLabel} htmlFor="medicalDevicesInput">Medical devices</label>
            <textarea className={formInput} id="medicalDevicesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="allergiesInput">Allergies</label>
            <textarea className={formInput} id="allergiesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="psyConditionInput">Psychological condition and state</label>
            <textarea className={formInput} id="psyConditionInput" type="text"></textarea>

            <label className={formLabel} htmlFor="otherMedicalInfosInput">Other useful medical informations</label>
            <textarea className={formInput} id="otherMedicalInfosInput" type="text"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Car />DRIVER INFORMATIONS</legend>

            <label className={formLabel} htmlFor="driverLicenceInput">Driver licence</label>
            <select className={formSelect} id="driverLicenceInput" defaultValue="">
              <option value=""></option>
              <option id="driverInput1" value="No">No</option>
              <option id="driverInput2" value="Yes">Yes</option>
            </select>

            <label className={formLabel} htmlFor="vehicleTypeColorInput">Vehicle(s) (type and color)</label>
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

          <label className={formLabel} htmlFor="communicationDevicesInput">Communication devices (phones, equipments)</label>
          <textarea className={formInput} id="communicationDevicesInput" type="text" placeholder="(ie. iPhone 10, 1 external battery, 1 talkie MRS-10T)"></textarea>

          <label className={formLabel} htmlFor="checkInReportInput">Check in (when, to who)</label>
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
            <option id="autostopInput3" value="Rarely, in specific situations">Rarely, in specific situations</option>
            <option id="autostopInput4" value="Sometimes, if needed">Sometimes, if needed</option>
            <option id="autostopInput5" value="Often, when convenient">Often, when convenient</option>
            <option id="autostopInput6" value="Yes, regularly">Yes, regularly</option>
          </select>

          <label className={formLabel} htmlFor="drinkingHabitInput">Drinking Habit</label>
          <select className={formSelect} id="drinkingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drinkingHabitInput1" value="Never drinks">Never drinks</option>
            <option id="drinkingHabitInput2" value="Rarely drinks (special occasions)">Rarely drinks</option>
            <option id="drinkingHabitInput3" value="Occasionally drinks (social settings)">Occasionally drinks</option>
            <option id="drinkingHabitInput4" value="Regularly drinks (weekends or evenings)">Regularly drinks</option>
            <option id="drinkingHabitInput5" value="Frequently drinks (most days)">Frequently drinks</option>
            <option id="drinkingHabitInput6" value="Heavily drinks (daily or binge drinking)">Heavily drinks</option>
          </select>

          <label className={formLabel} htmlFor="smokingHabitInput">Smoking Habit</label>
          <select className={formSelect} id="smokingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="smokingHabitInput1" value="Never smokes">Never smokes</option>
            <option id="smokingHabitInput2" value="Rarely smokes (special occasions)">Rarely smokes</option>
            <option id="smokingHabitInput3" value="Occasionally smokes (social settings)">Occasionally smokes</option>
            <option id="smokingHabitInput4" value="Regularly smokes (daily or weekly)">Regularly smokes</option>
            <option id="smokingHabitInput5" value="Frequently smokes (multiple times a day)">Frequently smokes</option>
            <option id="smokingHabitInput6" value="Heavily smokes (chain smoking)">Heavily smokes</option>
          </select>

          <label className={formLabel} htmlFor="drugUseHabitInput">Drug Use Habit</label>
          <select className={formSelect} id="drugUseHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drugUseHabitInput1" value="Never uses drugs">Never uses drugs</option>
            <option id="drugUseHabitInput2" value="Rarely uses drugs (special occasions)">Rarely uses drugs</option>
            <option id="drugUseHabitInput3" value="Occasionally uses drugs (social settings)">Occasionally uses drugs</option>
            <option id="drugUseHabitInput4" value="Regularly uses drugs (monthly or bi-weekly)">Regularly uses drugs</option>
            <option id="drugUseHabitInput5" value="Frequently uses drugs (weekly)">Frequently uses drugs</option>
            <option id="drugUseHabitInput6" value="Heavily uses drugs (daily or multiple times a week)">Heavily uses drugs</option>
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
            <option id="trustLevelInput6" value="Very Distrustful (does not trust people)">Very Distrustful</option>
          </select>

          <label className={formLabel} htmlFor="confidenceInput">Confidence</label>
          <select className={formSelect} id="confidenceInput" defaultValue="">
            <option value=""></option>
            <option id="confidenceInput1" value="Very adventurous">Very adventurous</option>
            <option id="confidenceInput2" value="Adventurous">Adventurous</option>
            <option id="confidenceInput3" value="Cautious">Cautious</option>
            <option id="confidenceInput4" value="Hesitant">Hesitant</option>
            <option id="confidenceInput5" value="Very hesistant">Very hesistant</option>
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
            <option id="swimmingInput1" value="Non-Swimmer (no swimming ability)">Non-Swimmer</option>
            <option id="swimmingInput2" value="Basic Swimmer (can swim basic strokes)">Basic Swimmer</option>
            <option id="swimmingInput3" value="Proficient Swimmer (strong swimming ability)">Proficient Swimmer</option>
            <option id="swimmingInput4" value="Expert Swimmer (highly skilled and confident in water)">Expert Swimmer</option>
          </select>

          <label className={formLabel} htmlFor="outdoorSkillInput">Outdoor Skill/Experience</label>
          <select className={formSelect} id="outdoorSkillInput" defaultValue="">
            <option value=""></option>
            <option id="outdoorSkillInput1" value="Novice (limited outdoor experience)">Novice</option>
            <option id="outdoorSkillInput2" value="Intermediate (some outdoor experience)">Intermediate</option>
            <option id="outdoorSkillInput3" value="Experienced (well-versed in outdoor activities)">Experienced</option>
            <option id="outdoorSkillInput4" value="Expert (highly skilled and experienced outdoors)">Expert</option>
          </select>

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
            <option id="survivalSkillsInput2" value="Basic (rudimentary survival skills)">Basic</option>
            <option id="survivalSkillsInput3" value="Intermediate (competent in basic survival techniques)">Intermediate</option>
            <option id="survivalSkillsInput4" value="Advanced (proficient in various survival skills)">Advanced</option>
          </select>

          <label className={formLabel} htmlFor="fightingSkillsInput">Fighting Skills</label>
          <select className={formSelect} id="fightingSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="fightingSkillsInput1" value="None">None</option>
            <option id="fightingSkillsInput2" value="basic">Basic</option>
            <option id="fightingSkillsInput3" value="intermediate">Intermediate</option>
            <option id="fightingSkillsInput4" value="advanced">Advanced</option>
            <option id="fightingSkillsInput5" value="advanced">Advanced</option>
          </select>

          <label className={formLabel} htmlFor="militaryExperienceInput">Military Experience</label>
          <select className={formSelect} id="militaryExperienceInput" defaultValue="">
            <option value=""></option>
            <option id="militaryExperienceInput1" value="None">None</option>
            <option id="militaryExperienceInput2" value="Basic (basic military training)">Basic</option>
            <option id="militaryExperienceInput3" value="Served (served in military)">Served</option>
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
          <legend className={formLegend}><Route />TRIP PLANNING</legend>

          <label className={formLabel} htmlFor="paperMoneyInput">Paper money subsitance (days)</label>
          <input className={formInput} id="paperMoneyInput" type="text" placeholder="(ie. Enough to survive 5 days)"></input>

          <label className={formLabel} htmlFor="tripPlanInput">Day to day plan (stations, trails, roads, resting areas, landmarks, POIs etc.)</label>
          <textarea className={formInput} id="tripPlanInput" type="text" placeholder="(ie. Empty)"></textarea>

        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Users />GROUP MEMBERS</legend>

          <label className={formLabel} htmlFor="groupMembersInput">Group members (names and contact)</label>
          <textarea className={formInput} id="groupMembersInput" type="text"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><RouteOff />FORESEABLE PROBLEMS & INTENTIONS</legend>

          <label className={formLabel} htmlFor="intentionsInput">Intentions</label>
          <textarea className={formInput} id="intentionsInput" type="text" placeholder="(ie. What will you do if anything goes bad, backup plans for each step of the trip)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Backpack />EQUIPMENT</legend>

          <label className={formLabel} htmlFor="equipmentInput">Equipment</label>
          <textarea className={formInput} id="equipmentInput" type="text" placeholder="(ie. Empty)"></textarea>

          <label className={formLabel} htmlFor="survivalEquipmentInput">Survival equipment</label>
          <textarea className={formInput} id="survivalEquipmentInput" type="text" placeholder="(ie. Empty)"></textarea>
        </fieldset>

        <fieldset className={formFieldset}>
          <legend className={formLegend}><Paperclip />JOINED DOCUMENTS</legend>
          <label className={formLabel} htmlFor="joinedDocumentsInput">Joined documents</label>
          <textarea className={formInput} id="joinedDocumentsInput" type="text" placeholder="(ie. Map, planning etc.)"></textarea>
        </fieldset>

        {controlsVisibility && <div className='flex flex-row fixed bottom-5 right-5 gap-4 items-center justify-end w-auto bg-gray-700 p-2 rounded-md'>
          <button className="text-gray-300 bg-gray-500 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2" onClick={ScrollToTopSmoothly}><ArrowUpFromDot /></button>
          <button className={formButton} id="submitForm" type="submit" onClick={ScrollToDocumentSmoothly}>GENERATE <FileText /></button>
        </div>}
      </form>
    </div>
  );
}
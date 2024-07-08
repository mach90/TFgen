/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Button from './Button';
import MyDocument from './SectionDocument';
import { Users, BookUser, Fingerprint, PersonStanding, ClipboardPlus, Car, Bed, RadioTower, Drama, CandlestickChart, Backpack, Route, RouteOff, Paperclip, FileText, Trash2, CalendarClock, Download, Info } from 'lucide-react';
import LabelInfos from './LabelInfos';
import { NavLink } from 'react-router-dom';

/* //////////////////////////////////////////////////
TRAVEL FORM COMPONENT
////////////////////////////////////////////////// */
export default function SectionForm({state, dispatch, ScrollTo}) {
  /* //////////////////////////////////////////////////
  TailwindCSS classes for form elements
  ////////////////////////////////////////////////// */
  const formSectionStyle = "flex flex-row py-12 px-4 sm:px-6 gap-12 justify-center h-full"
  const menuStyle = "flex flex-col gap-2 bg-colorBackground bg-opacity-60 py-4 px-8 border border-textColor1 rounded-md h-max justify-center sticky top-32 hidden md:block";
  const menuButtonStyle = "flex flex-row gap-2 text-textColor1 hover:text-colorTextLight items-center text-sm font-medium py-1";
  const menuButtonLabelStyle = "hidden lg:block";
  const menuIconSize = 32;
  const form = "flex flex-col gap-12 w-full h-max formRoot max-w-[800px]";
  const formIntro = "relative flex flex-col gap-4 w-full h-max bg-colorBackground bg-opacity-60 border border-color3 text-color3 text-sm p-12 rounded-md";
  const formFieldset = "relative flex flex-col gap-2 bg-colorBackground bg-opacity-60 border border-textColor1 rounded-md p-12";
  const fieldsetDescription = "text-textColor1 mb-8 italic text-lg text-right";
  const formLegend = "absolute top-4 left-4 flex flex-row text-textColor1 gap-2 text-xl items-center font-bold";
  const formLabel = "font-semibold text-textColor1 flex flex-row gap-2 items-center w-full mt-2";
  const formInput = "bg-color1 border border-textColor1 text-color2 p-1";
  const formSelect = "bg-color1 border border-textColor1 text-color2 p-1";
  const formControls = "flex flex-row gap-4 items-center fixed bottom-20 right-5 z-20";
  const formButtonGenerate = "text-textColor2 hover:text-colorTextLight font-bold bg-color3 rounded-md px-3 py-2 text-sm flex gap-2";

  /* //////////////////////////////////////////////////
  Form change/edition detection
  ////////////////////////////////////////////////// */
  const [editing, setEditing] = useState(true);

  function detectEdition(){
    if(editing === false) setEditing("fieldset1");
  }

  /* //////////////////////////////////////////////////
  Function to SUBMIT FORM
  ////////////////////////////////////////////////// */
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
    // DISPATCH ACTION
    dispatch({type: "formSubmitted", payload: formPayload});
    // EDITING STATE CHANGE
    setEditing(false);
  }

  /* //////////////////////////////////////////////////
  Function to RESET FORM
  ////////////////////////////////////////////////// */
  function resetForm(e){
    // FORM ROOT
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
    // DISPATCH ACTION
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
    ScrollTo('top', 'smooth');
  }

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <div className={formSectionStyle}>

      <div className={menuStyle}>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset1', 'smooth', 'center')}><Fingerprint size={menuIconSize}/> <p className={menuButtonLabelStyle}>IDENTITY</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset2', 'smooth', 'center')}><CalendarClock size={menuIconSize}/> <p className={menuButtonLabelStyle}>DATES</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset3', 'smooth', 'center')}><PersonStanding size={menuIconSize}/> <p className={menuButtonLabelStyle}>APPEARANCE</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset4', 'smooth', 'center')}><ClipboardPlus size={menuIconSize}/> <p className={menuButtonLabelStyle}>MEDICAL</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset5', 'smooth', 'center')}><Car size={menuIconSize}/> <p className={menuButtonLabelStyle}>VEHICLES</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset6', 'smooth', 'center')}><RadioTower size={menuIconSize}/> <p className={menuButtonLabelStyle}>COMMUNICATION</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset7', 'smooth', 'center')}><Bed size={menuIconSize}/> <p className={menuButtonLabelStyle}>STAYING</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset8', 'smooth', 'center')}><BookUser size={menuIconSize}/> <p className={menuButtonLabelStyle}>CONTACTS</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset9', 'smooth', 'center')}><Drama size={menuIconSize}/> <p className={menuButtonLabelStyle}>PERSONALITY</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset10', 'smooth', 'center')}><CandlestickChart size={menuIconSize}/> <p className={menuButtonLabelStyle}>SKILLS</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset11', 'smooth', 'center')}><Users size={menuIconSize}/> <p className={menuButtonLabelStyle}>GROUP</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset12', 'smooth', 'center')}><Route size={menuIconSize}/> <p className={menuButtonLabelStyle}>TRIP</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset13', 'smooth', 'center')}><RouteOff size={menuIconSize}/> <p className={menuButtonLabelStyle}>TRIP ISSUES</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset14', 'smooth', 'center')}><Backpack size={menuIconSize}/> <p className={menuButtonLabelStyle}>EQUIPMENT</p></button>
        <button className={menuButtonStyle} onClick={() => ScrollTo('fieldset15', 'smooth', 'center')}><Paperclip size={menuIconSize}/> <p className={menuButtonLabelStyle}>ATTACHMENTS</p></button>
      </div>

      <form className={form} onSubmit={(e) => handleSubmit(e)} onChange={detectEdition}>

        <div className={formControls}>
          {editing && <button className={formButtonGenerate} id="submitForm" type="submit" onClick={() => ScrollTo('pdfviewer', 'smooth')}>GENERATE <FileText /></button>}
          {!editing && 
            <PDFDownloadLink document={<MyDocument state={state}/>} fileName={`EPA-${state.thisIsOurDate}.pdf`}>
              {({ loading }) =>
                  loading ? <Button buttonStyle='disabled'>Generating document...</Button> : <Button buttonStyle='download'>DOWNLOAD <Download /></Button>
              }
            </PDFDownloadLink>}
          <Button buttonStyle='reset' id="resetForm" onClick={(e) => resetForm(e)}><Trash2 /></Button>
        </div>
        
        <div className={formIntro}>
          <p>Concerned about your data privacy. <NavLink to="/privacy">Read this</NavLink></p>
          <p className='absolute bottom-4 right-4'><Info size={60}/></p>
        </div>

        <fieldset id="fieldset1" className={formFieldset}>
          <legend className={formLegend}><Fingerprint/>IDENTITY</legend>
          <p className={fieldsetDescription}>To know your identity</p>
          <label className={formLabel} htmlFor="fullNameInput">Full Name <LabelInfos icon="info" infos="As displayed on your passport. Useful to identify you and call out your first name."/></label>
          <input className={formInput} id="fullNameInput" type="text"></input>

          <label className={formLabel} htmlFor="sexeInput">Biological sexe <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="sexeInput" defaultValue="">
            <option value=""></option>
            <option id="sexeInput1" value="Male">Male</option>
            <option id="sexeInput2" value="Female">Female</option>
          </select>

          <label className={formLabel} htmlFor="dobInput">Date of Birth <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="dobInput" type="date"></input>

          <label className={formLabel} htmlFor="nationalityInput">Nationality <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="nationalityInput" type="text"></input>
        </fieldset>

        <fieldset id="fieldset2" className={formFieldset}>
          <legend className={formLegend}><CalendarClock />LEAVE AND RETURN DATES</legend>
          <p className={fieldsetDescription}>To know when you leave and when you are supposed to be back</p>
          <label className={formLabel} htmlFor="etdInput">Leaving date <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="etdInput" type="datetime-local"></input>

          <label className={formLabel} htmlFor="etaInput">Return date <LabelInfos icon="important" infos="This date will serve as a reference point from which contacts will determine if they should contact emergencies."/></label>
          <input className={formInput} id="etaInput" type="datetime-local"></input>
        </fieldset>

        <fieldset id="fieldset3" className={formFieldset}>
          <legend className={formLegend}><PersonStanding />APPEARANCE</legend>
          <p className={fieldsetDescription}>To help in visual identification</p>

          <label className={formLabel} htmlFor="heightInput">Height (CM) <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="heightInput" type="number"></input>

          <label className={formLabel} htmlFor="weightInput">Weight (KG) <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="weightInput" type="number"></input>

          <label className={formLabel} htmlFor="hairInput">Hair (color and length) <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} id="hairInput" type="text" placeholder="(ie. crewcut, brown)"></input>

          <label className={formLabel} htmlFor="distinctiveInput">Distinctive signs (glasses, tattoes, scars etc.) <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="distinctiveInput" type="text" placeholder="(ie. glasses, tribal tattoo right arm)"></textarea>

          <label className={formLabel} htmlFor="travelOutfitInput">Travel outfit <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="travelOutfitInput" type="text" placeholder="(ie. hiking pant, hiking boot MT900, fleece)"></textarea>
        </fieldset>

        <fieldset id="fieldset4" className={formFieldset}>
          <legend className={formLegend}><ClipboardPlus />MEDICAL</legend>
          <p className={fieldsetDescription}>To know your limitations and anticipate and provide medical solutions</p>

            <label className={formLabel} htmlFor="bloodtypeInput">Bloodtype <LabelInfos icon="info" infos="Leave empty if you don't know."/></label>
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

            {/* <label className={formLabel} htmlFor="importantMedicationInput">Important medication <LabelInfos icon="info" infos=""/></label>
            <textarea className={formInput} id="importantMedicationInput" type="text"></textarea> */}

            <label className={formLabel} htmlFor="currentMedicationInput">Current medication <LabelInfos icon="important" infos="Specify if you have these on you."/></label>
            <textarea className={formInput} id="currentMedicationInput" type="text"></textarea>

            <label className={formLabel} htmlFor="medicalDevicesInput">Medical devices <LabelInfos icon="none" infos=""/></label>
            <textarea className={formInput} id="medicalDevicesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="allergiesInput">Allergies <LabelInfos icon="none" infos=""/></label>
            <textarea className={formInput} id="allergiesInput" type="text"></textarea>

            <label className={formLabel} htmlFor="psyConditionInput">Mental state and psychological condition <LabelInfos icon="none" infos=""/></label>
            <textarea className={formInput} id="psyConditionInput" type="text"></textarea>

            <label className={formLabel} htmlFor="otherMedicalInfosInput">Other useful medical informations <LabelInfos icon="none" infos="Anything that you think should be mentioned."/></label>
            <textarea className={formInput} id="otherMedicalInfosInput" type="text"></textarea>
        </fieldset>

        <fieldset id="fieldset5" className={formFieldset}>
          <legend className={formLegend}><Car />VEHICLES</legend>
          <p className={fieldsetDescription}>To help in visual identification of your vehicle and estimate your range</p>

            <label className={formLabel} htmlFor="driverLicenceInput">Driver licence <LabelInfos icon="none" infos=""/></label>
            <select className={formSelect} id="driverLicenceInput" defaultValue="">
              <option value=""></option>
              <option id="driverInput1" value="No">No</option>
              <option id="driverInput2" value="Yes">Yes</option>
            </select>

            <label className={formLabel} htmlFor="vehicleTypeColorInput">Vehicle(s) (make, model and color) <LabelInfos icon="none" infos=""/></label>
            <input className={formInput} id="vehicleTypeColorInput" type="text" placeholder="(ie. white toyota corolla 2014)"></input>

            <label className={formLabel} htmlFor="vehicleRegInput">Vehicle(s) registration <LabelInfos icon="none" infos=""/></label>
            <input className={formInput} id="vehicleRegInput" type="text"></input>

            <label className={formLabel} htmlFor="vehicleRentalAgencyInput">Rental informations (agencies and dates) <LabelInfos icon="none" infos=""/></label>
            <textarea className={formInput} id="vehicleRentalAgencyInput" type="text" placeholder="(ie. BlueRental Keflavik Airport from sept 9 to sept 15)"></textarea>
        </fieldset>

        <fieldset id="fieldset6" className={formFieldset}>
          <legend className={formLegend}><RadioTower />COMMUNICATION</legend>
          <p className={fieldsetDescription}>To know your communication capabilities</p>

          <label className={formLabel} htmlFor="telephoneInput">Phone number <LabelInfos icon="none" infos=""/></label>
          <input className={formInput} type="tel" name="phone" id="telephoneInput" placeholder="+"></input>

          <label className={formLabel} htmlFor="communicationDevicesInput">Communication devices <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="communicationDevicesInput" type="text" placeholder="(ie. iPhone 10, 1 talkie MRS-10T)"></textarea>

          <label className={formLabel} htmlFor="checkInReportInput">Check in reports (when, to who) <LabelInfos icon="important" infos="If you fail to check in, your family/friends might be suceptible to consider something is wrong."/></label>
          <textarea className={formInput} id="checkInReportInput" type="text" placeholder="(ie. Check in with my family every evening at 8 PM.)"></textarea>

          <label className={formLabel} htmlFor="signalCoverageInput">Signal coverage expected <LabelInfos icon="info" infos="Search for websites that show mobile coverage on a map."/></label>
          <textarea className={formInput} id="signalCoverageInput" type="text" placeholder="(ie. Checked, good coverage except for a portion of the road near the glacier)"></textarea>

        </fieldset>

        <fieldset id="fieldset7" className={formFieldset}>
          <legend className={formLegend}><Bed />STAYING</legend>
          <p className={fieldsetDescription}>To know where you might stay</p>

          <label className={formLabel} htmlFor="stayingInput">Hotels, campsites (infos and dates) <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="stayingInput" type="text" placeholder="(ie. Accord hotel Reykjavik sept9 to sept10 then campsites along the road)"></textarea>
        </fieldset>

        <fieldset id="fieldset8" className={formFieldset}>
          <legend className={formLegend}><BookUser />RELATIVES/EMERGENCY CONTACTS</legend>
          <p className={fieldsetDescription}>To know who to contact first if anything happens</p>

          <label className={formLabel} htmlFor="contactsInput">Who to contact (name, phone, relation) <LabelInfos icon="info" infos="Basically all contacts that you share this form with."/></label>
          <textarea className={formInput} id="contactsInput" type="text"></textarea>

        </fieldset>

        <fieldset id="fieldset9" className={formFieldset}>
          <legend className={formLegend}><Drama />PERSONALITY AND BEHAVIOR</legend>
          <p className={fieldsetDescription}>To better understand who you are</p>

          <label className={formLabel} htmlFor="autostopInput">Autostop <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="autostopInput" defaultValue="">
            <option value=""></option>
            <option id="autostopInput1" value="Will never do">Will never do</option>
            <option id="autostopInput2" value="Only as a last resort">Only as a last resort</option>
            <option id="autostopInput3" value="Considered, if needed">Considered if needed</option>
          </select>

          <label className={formLabel} htmlFor="drinkingHabitInput">Drinking Habit <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="drinkingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drinkingHabitInput1" value="Never drinks">No alcohol</option>
            <option id="drinkingHabitInput2" value="Occasionnaly drinks">Occasionnally</option>
            <option id="drinkingHabitInput3" value="Regularly drinks">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="smokingHabitInput">Smoking Habit <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="smokingHabitInput" defaultValue="">
            <option value=""></option>
            <option id="smokingHabitInput1" value="Never smokes">No</option>
            <option id="smokingHabitInput2" value="Occasionnaly smokes">Occasionnally</option>
            <option id="smokingHabitInput3" value="Regularly smokes">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="drugUseHabitInput">Drug Use Habit <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="drugUseHabitInput" defaultValue="">
            <option value=""></option>
            <option id="drugUseHabitInput1" value="Never use drugs">No</option>
            <option id="drugUseHabitInput2" value="Occasionnaly use drugs">Occasionnally</option>
            <option id="drugUseHabitInput3" value="Regularly use drugs">Regularly</option>
          </select>

          <label className={formLabel} htmlFor="personalityTraitInput">Personality Trait <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="personalityTraitInput" defaultValue="">
            <option value=""></option>
            <option id="personalityTraitInput1" value="Very Extrovert (loves socializing)">Very Extrovert</option>
            <option id="personalityTraitInput2" value="Extrovert (enjoys socializing)">Extrovert</option>
            <option id="personalityTraitInput3" value="Ambivert (balance of introvert and extrovert)">Ambivert</option>
            <option id="personalityTraitInput4" value="Introvert (prefers solitude)">Introvert</option>
            <option id="personalityTraitInput5" value="Very Introvert (avoids socializing)">Very Introvert</option>
            <option id="personalityTraitInput6" value="Social Anxiety (anxious in social situations)">Social Anxiety</option>
          </select>

          <label className={formLabel} htmlFor="trustLevelInput">Trust Level <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="trustLevelInput" defaultValue="">
            <option value=""></option>
            <option id="trustLevelInput1" value="Very Trusting (trusts easily)">Very Trusting</option>
            <option id="trustLevelInput2" value="Trusting (generally trusts people)">Trusting</option>
            <option id="trustLevelInput3" value="Cautiously Trusting (trusts with caution)">Cautiously Trusting</option>
            <option id="trustLevelInput4" value="Wary (hesitant to trust)">Wary</option>
            <option id="trustLevelInput5" value="Distrustful (rarely trusts)">Distrustful</option>
            <option id="trustLevelInput6" value="Very Distrustful (does not trust people at all)">Very Distrustful</option>
          </select>

          <label className={formLabel} htmlFor="confidenceInput">Cautiousness <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="confidenceInput" defaultValue="">
            <option value=""></option>
            <option id="confidenceInput1" value="Reckless">Reckless</option>
            <option id="confidenceInput2" value="Adventurous">Adventurous</option>
            <option id="confidenceInput3" value="Moderate">Moderate</option>
            <option id="confidenceInput4" value="Cautious">Cautious</option>
            <option id="confidenceInput5" value="Very cautious">Very cautious</option>
          </select>

          <label className={formLabel} htmlFor="hobbiesInput">Hobbies <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="hobbiesInput" type="text"></textarea>

        </fieldset>

        <fieldset id="fieldset10" className={formFieldset}>
          <legend className={formLegend}><CandlestickChart />SKILLS</legend>
          <p className={fieldsetDescription}>To know what you are capable of</p>

          <label className={formLabel} htmlFor="languagesInput">Language(s) spoken (basic/fluent/native) <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="languagesInput" type="text"></textarea>

          <label className={formLabel} htmlFor="fitnessConditionInput">Fitness Condition <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="fitnessConditionInput" defaultValue="">
            <option value=""></option>
            <option id="fitnessConditionInput1" value="Poor (low fitness level)">Poor</option>
            <option id="fitnessConditionInput2" value="Average (moderate fitness level)">Average</option>
            <option id="fitnessConditionInput3" value="Good (high fitness level)">Good</option>
            <option id="fitnessConditionInput4" value="Excellent (exceptional fitness level)">Excellent</option>
          </select>

          <label className={formLabel} htmlFor="swimmingInput">Swimming <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="swimmingInput" defaultValue="">
            <option value=""></option>
            <option id="swimmingInput1" value="Can't swim">Non-Swimmer</option>
            <option id="swimmingInput2" value="Basic Swimmer (can swim basic strokes)">Basic Swimmer</option>
            <option id="swimmingInput3" value="Proficient Swimmer (strong swimming ability)">Proficient Swimmer</option>
            <option id="swimmingInput4" value="Expert Swimmer (highly skilled and confident in water)">Expert Swimmer</option>
          </select>

          {/* <label className={formLabel} htmlFor="outdoorSkillInput">Outdoor Skill/Experience <LabelInfos icon="info" infos=""/></label>
          <select className={formSelect} id="outdoorSkillInput" defaultValue="">
            <option value=""></option>
            <option id="outdoorSkillInput1" value="Novice (limited outdoor experience)">Novice</option>
            <option id="outdoorSkillInput2" value="Intermediate (some outdoor experience)">Intermediate</option>
            <option id="outdoorSkillInput3" value="Experienced (well-versed in outdoor activities)">Experienced</option>
            <option id="outdoorSkillInput4" value="Expert (highly skilled and experienced outdoors)">Expert</option>
          </select> */}

          <label className={formLabel} htmlFor="hikingExperienceInput">Hiking Experience <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="hikingExperienceInput" defaultValue="">
            <option value=""></option>
            <option id="hikingExperienceInput1" value="Novice (limited hiking experience)">Novice</option>
            <option id="hikingExperienceInput2" value="Intermediate (some hiking experience)">Intermediate</option>
            <option id="hikingExperienceInput3" value="Experienced (frequent hiker)">Experienced</option>
          </select>

          <label className={formLabel} htmlFor="survivalSkillsInput">Survival Skills <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="survivalSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="survivalSkillsInput1" value="None">None</option>
            <option id="survivalSkillsInput2" value="Basic survival skills">Basic</option>
            <option id="survivalSkillsInput3" value="Intermediate survival skills">Intermediate</option>
            <option id="survivalSkillsInput4" value="Advanced survival skills">Advanced</option>
          </select>

          <label className={formLabel} htmlFor="fightingSkillsInput">Fighting ability <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="fightingSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="fightingSkillsInput1" value="Never got into a fight">Never got into a fight</option>
            <option id="fightingSkillsInput2" value="Had a few altercations">Had a few altercations</option>
            <option id="fightingSkillsInput3" value="Got into a few real fight">Got into a few real fight</option>
            <option id="fightingSkillsInput4" value="Got into many real fight">Got into many real fight</option>
          </select>

          <label className={formLabel} htmlFor="militaryExperienceInput">Military Experience <LabelInfos icon="none" infos=""/></label>
          <select className={formSelect} id="militaryExperienceInput" defaultValue="">
            <option value=""></option>
            <option id="militaryExperienceInput1" value="None">None</option>
            <option id="militaryExperienceInput2" value="Basic training">Basic training</option>
            <option id="militaryExperienceInput3" value="Served in the military">Served</option>
          </select>

          <label className={formLabel} htmlFor="medicSkillsInput">Medic Skills <LabelInfos icon="info" infos="Should not be underestimated nor overestimated."/></label>
          <select className={formSelect} id="medicSkillsInput" defaultValue="">
            <option value=""></option>
            <option id="medicSkillsInput1" value="None">None</option>
            <option id="medicSkillsInput2" value="Basic (rudimentary medical knowledge)">Basic</option>
            <option id="medicSkillsInput3" value="Intermediate (competent in basic medical procedures)">Intermediate</option>
            <option id="medicSkillsInput4" value="Advanced (proficient in advanced medical procedures)">Advanced</option>
          </select>

        </fieldset>

        <fieldset id="fieldset11" className={formFieldset}>
          <legend className={formLegend}><Users />GROUP MEMBERS</legend>
          <p className={fieldsetDescription}>To know who you are traveling with</p>

          <label className={formLabel} htmlFor="groupMembersInput">Group members (names, age, sexe, contact infos) <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="groupMembersInput" type="text"></textarea>
        </fieldset>

        <fieldset id="fieldset12" className={formFieldset}>
          <legend className={formLegend}><Route />TRIP PLAN</legend>
          <p className={fieldsetDescription}>To know your precise itinerary</p>

          <label className={formLabel} htmlFor="paperMoneyInput">Paper money subsitance (days) <LabelInfos icon="important" infos="Do not specify the cash amount and do not share this information if the person is not completly trustful. Specify the number of days you can subsist with that money instead."/></label>
          <input className={formInput} id="paperMoneyInput" type="text" placeholder="(ie. Enough for X days)"></input>

          <label className={formLabel} htmlFor="tripPlanInput">Day to day plan (stations, trails, roads, resting areas, landmarks, POIs etc.) <LabelInfos icon="important" infos="Do not share this if the person is not completly trustful. You can  join a document as an alternative. Should be as descriptive as possible with precise timing and possible plan B."/></label>
          <textarea className={formInput} id="tripPlanInput" type="text" placeholder="(ie. Day1..... Day2.....)"></textarea>
        </fieldset>

        <fieldset id="fieldset13" className={formFieldset}>
          <legend className={formLegend}><RouteOff />POTENTIAL ISSUES</legend>
          <p className={fieldsetDescription}>To know if you have anticipated problems and your possible intentions</p>

          <label className={formLabel} htmlFor="intentionsInput">Planned decisions and actions for potential issues <LabelInfos icon="important" infos="What will you do if anything goes bad, backup plans and planned actions for each step of the trip."/></label>
          <textarea className={formInput} id="intentionsInput" type="text" ></textarea>
        </fieldset>

        <fieldset id="fieldset14" className={formFieldset}>
          <legend className={formLegend}><Backpack />EQUIPMENT</legend>
          <p className={fieldsetDescription}>To know your food and material capacities</p>

          <label className={formLabel} htmlFor="waterFoodSupplyInput">Water/Food supply (days) <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="waterFoodSupplyInput" type="text" placeholder="(ie. 2L water, 2 days of food)"></textarea>

          <label className={formLabel} htmlFor="survivalEquipmentInput">Survival equipment <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="survivalEquipmentInput" type="text" placeholder="(ie. Tent, Pocket knife, Water filter, First aid kit, Waterproof clothing, Firearm, Warm clothing, Signal mirror, Whistle, Matches/lighter, Stove w/fuel, Flashlight, GPS, Compass, Map, SPOT locator device, Avalanche beacon, Avalanche probe, Bear bangers, Bear spray, Life jacket etc.)"></textarea>
        </fieldset>

        <fieldset id="fieldset15" className={formFieldset}>
          <legend className={formLegend}><Paperclip />ATTACHMENTS</legend>
          <p className={fieldsetDescription}>To know if you will join any documents to the Travel Form</p>
          <label className={formLabel} htmlFor="attachmentsInput">Attachments <LabelInfos icon="none" infos=""/></label>
          <textarea className={formInput} id="attachmentsInput" type="text" placeholder="(ie. Map, detailed planning etc.)"></textarea>
        </fieldset>

      </form>
    </div>
  );
}


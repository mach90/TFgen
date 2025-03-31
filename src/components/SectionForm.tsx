//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import { FormEvent, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Tooltip } from 'react-tooltip'
import ScrollTo from '../utils/scrollTo';
import { type Action, type State } from '../pages/Form';

/* //////////////////////////////////////////////////
COMPONENTS
////////////////////////////////////////////////// */
import Button from '../ui/Button';
import MyDocument from './SectionDocument';
import FormMenu from './FormMenu';
/* //////////////////////////////////////////////////
ICONS
////////////////////////////////////////////////// */
import { FaBed, FaCalendarAlt, FaCar, FaDownload, FaNotesMedical, FaPaperclip, FaRoute, FaTheaterMasks, FaTrashAlt, FaUser } from 'react-icons/fa';
import { IoIosBody, IoMdHelpCircleOutline } from 'react-icons/io';
import { FaTowerCell, FaUserGroup } from 'react-icons/fa6';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { LuChartCandlestick } from 'react-icons/lu';
import { TbRouteOff } from 'react-icons/tb';
import { BsFillBackpack2Fill } from 'react-icons/bs';
import { BiLoaderCircle } from 'react-icons/bi';
import { IoSave } from 'react-icons/io5';
import { FiAlertTriangle } from 'react-icons/fi';

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
import 'react-tooltip/dist/react-tooltip.css'

const formSectionStyle = "bg-bgPattern flex flex-row py-32 px-4 sm:px-6 gap-12 justify-center h-full font-default"

const formStyle = "flex flex-col gap-12 w-full h-max formRoot max-w-[800px]";

const formFieldsetStyle = "relative flex flex-col gap-2 bg-bgForm bg-no-repeat bg-cover text-formText rounded-md p-6 md:p-10 lg:p-16 xl:px-20 xl:py-28 shadow-lg";
const formLegendStyle = "absolute top-4 left-4 md:top-8 md:left-8 lg:top-12 lg:left-12 xl:top-16 xl:left-20 flex flex-row gap-2 text-2xl md:text-3xl xl:text-5xl font-heading items-center font-bold text-formHeading";
const fieldsetDescriptionStyle = "mb-8 mt-8 italic text-lg text-left border-b-2 border-dashed border-formBorder p-2 text-formSubheading";
const formIconStyle = "text-formText rounded-full p-1 bg-formIcon";
const formLabelStyle = "font-semibold flex flex-row gap-2 md:text-lg items-center w-full mt-2 text-formSubheading cursor-triangle";
const formInputStyle = "bg-formField text-formFieldText p-1 cursor-input";
const formSelectStyle = "bg-formField text-formFieldText p-1 cursor-triangle";
const formOptionStyle = "cursor-triangle";

const formControlsStyle = "fixed bottom-20 right-5 flex flex-rpw gap-4 items-center z-20";

const formButtonGenerateStyle = "text-buttonDefaultText hover:text-buttonDefaultText font-bold bg-buttonDefault rounded-md px-3 py-2 text-xl flex gap-2 items-center cursor-finger";

const tooltipStyle = "max-w-48 md:max-w-sm";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// TYPES
//////////////////////////////////////////////////////////////////////////////////////////////////////
interface SectionFormProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// TRAVEL FORM COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////////
const SectionForm: React.FC<SectionFormProps> = ({state, dispatch}) => {
  /* //////////////////////////////////////////////////
  Form change/edition detection
  ////////////////////////////////////////////////// */
  const [editing, setEditing] = useState(true);

  function detectEdition(){
    if(editing === false) setEditing(true);
  }

  /* //////////////////////////////////////////////////
  Function to SUBMIT FORM
  ////////////////////////////////////////////////// */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // FORM
    const form = e.currentTarget;

    // PAYLOAD
    const formPayload = {
      fullNamePayload: form.fullNameInput.value,
      sexePayload: form.sexeInput.value,
      dobPayload: form.dobInput.value,
      nationalityPayload: form.nationalityInput.value,
      ethnicityPayload: form.ethnicityInput.value,
      etdPayload: form.etdInput.value,
      etaPayload: form.etaInput.value,
      heightPayload: form.heightInput.value,
      weightPayload: form.weightInput.value,
      hairPayload: form.hairInput.value,
      distinctivePayload: form.distinctiveInput.value,
      travelOutfitPayload: form.travelOutfitInput.value,
      bloodtypePayload: form.bloodtypeInput.value,
      currentMedicationPayload: form.currentMedicationInput.value,
      medicalDevicesPayload: form.medicalDevicesInput.value,
      allergiesPayload: form.allergiesInput.value,
      psyConditionPayload: form.psyConditionInput.value,
      otherMedicalInfosPayload: form.otherMedicalInfosInput.value,
      driverLicencePayload: form.driverLicenceInput.value,
      vehicleTypeColorPayload: form.vehicleTypeColorInput.value,
      vehicleRegPayload: form.vehicleRegInput.value,
      vehicleRentalAgencyPayload: form.vehicleRentalAgencyInput.value,
      telephonePayload: form.telephoneInput.value,
      communicationDevicesPayload: form.communicationDevicesInput.value,
      checkInReportPayload: form.checkInReportInput.value,
      signalCoveragePayload: form.signalCoverageInput.value,
      stayingPayload: form.stayingInput.value,
      contactsPayload: form.contactsInput.value,
      autostopPayload: form.autostopInput.value,
      drinkingHabitPayload: form.drinkingHabitInput.value,
      smokingHabitPayload: form.smokingHabitInput.value,
      drugUseHabitPayload: form.drugUseHabitInput.value,
      personalityTraitPayload: form.personalityTraitInput.value,
      trustLevelPayload: form.trustLevelInput.value,
      confidencePayload: form.confidenceInput.value,
      hobbiesPayload: form.hobbiesInput.value,
      languagesPayload: form.languagesInput.value,
      fitnessConditionPayload: form.fitnessConditionInput.value,
      swimmingPayload: form.swimmingInput.value,
      hikingExperiencePayload: form.hikingExperienceInput.value,
      survivalSkillsPayload: form.survivalSkillsInput.value,
      militaryExperiencePayload: form.militaryExperienceInput.value,
      fightingSkillsPayload: form.fightingSkillsInput.value,
      medicSkillsPayload: form.medicSkillsInput.value,
      paperMoneyPayload: form.paperMoneyInput.value,
      tripPlanPayload: form.tripPlanInput.value,
      groupMembersPayload: form.groupMembersInput.value,
      intentionsPayload: form.intentionsInput.value,
      waterFoodSupplyPayload: form.waterFoodSupplyInput.value,
      survivalEquipmentPayload: form.survivalEquipmentInput.value,
      attachmentsPayload: form.attachmentsInput.value,
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
  function resetForm(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    // FORM ROOT
    const formRoot = e.currentTarget.closest<HTMLFormElement>('.formRoot');
    if (!formRoot) return;

    // PAYLOAD
    const resetPayload = {
      fullNamePayload: "",
      sexePayload: "",
      dobPayload: "",
      nationalityPayload: "",
      ethnicityPayload: "",
      etdPayload: "",
      etaPayload: "",
      heightPayload: 0,
      weightPayload: 0,
      hairPayload: "",
      distinctivePayload: "",
      travelOutfitPayload: "",
      bloodtypePayload: "",
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
      waterFoodSupplyPayload: "",
      survivalEquipmentPayload: "",
      attachmentsPayload: "",
      thisIsOurDatePayload: "",
    }

    // DISPATCH ACTION
    dispatch({type: "formSubmitted", payload: resetPayload});

    // FORM INPUT RESET
    formRoot.reset();

    // EDITING STATE
    setEditing(true);

    // SCROLL
    ScrollTo("top", "smooth");
  }

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <div className={formSectionStyle}>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
      MENU        
      //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <FormMenu />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
      FORM
      //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <form className={formStyle} onSubmit={(e) => handleSubmit(e)} onChange={detectEdition}>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        BUTTONS: GENERATE/DOWNLOAD, RESET        
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={formControlsStyle}>
          {editing && <button className={formButtonGenerateStyle} id="submitForm" type="submit" onClick={() => ScrollTo('pdfviewer', 'smooth')}><IoSave /></button>}
          {!editing && (
            <PDFDownloadLink document={<MyDocument state={state}/>} fileName={`EPA-${state.thisIsOurDate}.pdf`}>
              {({ loading }) => loading ? <Button buttonStyle='disabled'><BiLoaderCircle /></Button> : <Button buttonStyle='download'><FaDownload /></Button>}
            </PDFDownloadLink>
          )}
          <Button buttonStyle='reset' id="resetForm" onClick={(e) => resetForm(e)}><FaTrashAlt /></Button>
        </div>
        
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        IDENTITY
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-identity" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaUser className={formIconStyle} />IDENTITY</legend>
          <p className={fieldsetDescriptionStyle}>To know your identity</p>
          {/* //////////////////////////////////////////////////
          Full Name
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="fullNameInput">Full Name 
            <a className="my-anchor-full-name"><IoMdHelpCircleOutline /></a>
            <Tooltip anchorSelect=".my-anchor-full-name" place="top" className={tooltipStyle}>As displayed on your passport. Useful to identify you and call out your first name.</Tooltip>
          </label>
          <input className={formInputStyle} id="fullNameInput" type="text"></input>

          {/* //////////////////////////////////////////////////
          Biological sexe
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="sexeInput">Biological sexe</label>
          <select className={formSelectStyle} id="sexeInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="sexeInput1" value="Male">Male</option>
            <option className={formOptionStyle} id="sexeInput2" value="Female">Female</option>
          </select>

          {/* //////////////////////////////////////////////////
          Date of Birth
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="dobInput">Date of Birth</label>
          <input className={formInputStyle} id="dobInput" type="date"></input>

          {/* //////////////////////////////////////////////////
          Nationality
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="nationalityInput">Nationality</label>
          <input className={formInputStyle} id="nationalityInput" type="text"></input>

          {/* //////////////////////////////////////////////////
          Ethnicity
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="ethnicityInput">Ethnicity</label>
          <input className={formInputStyle} id="ethnicityInput" type="text"></input>
        </fieldset>
        
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        TRAVEL DATES       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-dates" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaCalendarAlt className={formIconStyle}/>TRAVEL DATES</legend>
          <p className={fieldsetDescriptionStyle}>To know when you leave and when you are supposed to be back</p>
          {/* //////////////////////////////////////////////////
          Leaving date
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="etdInput">Leaving date</label>
          <input className={formInputStyle} id="etdInput" type="datetime-local"></input>

          {/* //////////////////////////////////////////////////
          Return date
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="etaInput">Return date 
            <a className="my-anchor-return-date text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-return-date" place="top" className={tooltipStyle}>This date will serve as a reference point from which contacts will determine if they should contact emergencies.</Tooltip>
          </label>
          <input className={formInputStyle} id="etaInput" type="datetime-local"></input>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        APPEARANCE      
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-appearance" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><IoIosBody className={formIconStyle}/>APPEARANCE</legend>
          <p className={fieldsetDescriptionStyle}>To help in visual identification</p>

          {/* //////////////////////////////////////////////////
          Height
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="heightInput">Height (CM)</label>
          <input className={formInputStyle} id="heightInput" type="number"></input>

          {/* //////////////////////////////////////////////////
          Weight
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="weightInput">Weight (KG)</label>
          <input className={formInputStyle} id="weightInput" type="number"></input>

          {/* //////////////////////////////////////////////////
          Hair
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="hairInput">Hair (color and length)</label>
          <input className={formInputStyle} id="hairInput" type="text" placeholder="(ie. crewcut, brown)"></input>

          {/* //////////////////////////////////////////////////
          Distinctive signs
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="distinctiveInput">Distinctive signs (glasses, tattoes, scars etc.)</label>
          <textarea className={formInputStyle} id="distinctiveInput" placeholder="(ie. glasses, tribal tattoo right arm)"></textarea>

          {/* //////////////////////////////////////////////////
          Travel outfit
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="travelOutfitInput">Travel outfit</label>
          <textarea className={formInputStyle} id="travelOutfitInput" placeholder="(ie. hiking pant, hiking boot MT900, fleece)"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        MEDICAL       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-medical" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaNotesMedical className={formIconStyle}/>MEDICAL</legend>
          <p className={fieldsetDescriptionStyle}>To know your limitations and anticipate and provide medical solutions</p>

            {/* //////////////////////////////////////////////////
            Bloodtype
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="bloodtypeInput">Bloodtype
              <a className="my-anchor-bloodtype text-warning"><FiAlertTriangle /></a>
              <Tooltip anchorSelect=".my-anchor-bloodtype" place="top" className={tooltipStyle}>Leave empty if you don't know.</Tooltip>
            </label>
            <select className={formSelectStyle} id="bloodtypeInput" defaultValue="">
              <option className={formOptionStyle} value=""></option>
              <option className={formOptionStyle} id="bloodtypeInput1" value="Apos">A+</option>
              <option className={formOptionStyle} id="bloodtypeInput2" value="Aneg">A-</option>
              <option className={formOptionStyle} id="bloodtypeInput3" value="Bpos">B+</option>
              <option className={formOptionStyle} id="bloodtypeInput4" value="Bneg">B-</option>
              <option className={formOptionStyle} id="bloodtypeInput5" value="ABpos">AB+</option>
              <option className={formOptionStyle} id="bloodtypeInput6" value="ABneg">AB-</option>
              <option className={formOptionStyle} id="bloodtypeInput7" value="Opos">O+</option>
              <option className={formOptionStyle} id="bloodtypeInput8" value="Oneg">O-</option>
            </select>

            {/* //////////////////////////////////////////////////
            Current medication
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="currentMedicationInput">Current medication
            <a className="my-anchor-current-medication text-warning"><FiAlertTriangle /></a>
              <Tooltip anchorSelect=".my-anchor-current-medication" place="top" className={tooltipStyle}>Specify if you have these on you.</Tooltip>
            </label>
            <textarea className={formInputStyle} id="currentMedicationInput"></textarea>

            {/* //////////////////////////////////////////////////
            Medical devices
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="medicalDevicesInput">Medical devices</label>
            <textarea className={formInputStyle} id="medicalDevicesInput"></textarea>

            {/* //////////////////////////////////////////////////
            Allergies
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="allergiesInput">Allergies</label>
            <textarea className={formInputStyle} id="allergiesInput"></textarea>

            {/* //////////////////////////////////////////////////
            Mental state and psychological conditio
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="psyConditionInput">Mental state and psychological condition</label>
            <textarea className={formInputStyle} id="psyConditionInput"></textarea>

            {/* //////////////////////////////////////////////////
            Other useful medical informations
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="otherMedicalInfosInput">Other useful medical informations
              <a className="my-anchor-other-medical text-warning"><FiAlertTriangle /></a>
              <Tooltip anchorSelect=".my-anchor-other-medical" place="top" className={tooltipStyle}>Anything that you think should be mentioned.</Tooltip>
            </label>
            <textarea className={formInputStyle} id="otherMedicalInfosInput"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        VEHICLES       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-vehicles" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaCar className={formIconStyle}/>VEHICLES</legend>
          <p className={fieldsetDescriptionStyle}>To help in visual identification of your vehicle and estimate your range</p>

            {/* //////////////////////////////////////////////////
            Driver licence
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="driverLicenceInput">Driver licence</label>
            <select className={formSelectStyle} id="driverLicenceInput" defaultValue="">
              <option className={formOptionStyle} value=""></option>
              <option className={formOptionStyle} id="driverInput1" value="No">No</option>
              <option className={formOptionStyle} id="driverInput2" value="Yes">Yes</option>
            </select>

            {/* //////////////////////////////////////////////////
            Vehicle
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="vehicleTypeColorInput">Vehicle(s) (make, model and color)</label>
            <input className={formInputStyle} id="vehicleTypeColorInput" type="text" placeholder="(ie. white toyota corolla 2014)"></input>

            {/* //////////////////////////////////////////////////
            Vehicle(s) registration
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="vehicleRegInput">Vehicle(s) registration</label>
            <input className={formInputStyle} id="vehicleRegInput" type="text"></input>

            {/* //////////////////////////////////////////////////
            Rental informations
            ////////////////////////////////////////////////// */}
            <label className={formLabelStyle} htmlFor="vehicleRentalAgencyInput">Rental informations (agencies and dates)</label>
            <textarea className={formInputStyle} id="vehicleRentalAgencyInput" placeholder="(ie. BlueRental Keflavik Airport from sept 9 to sept 15)"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        COMMUNICATION       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-communication" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaTowerCell className={formIconStyle}/>COMMUNICATION</legend>
          <p className={fieldsetDescriptionStyle}>To know your communication capabilities</p>

          {/* //////////////////////////////////////////////////
          Phone number
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="telephoneInput">Phone number</label>
          <input className={formInputStyle} type="tel" name="phone" id="telephoneInput" placeholder="+"></input>

          {/* //////////////////////////////////////////////////
          Communication device
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="communicationDevicesInput">Communication devices</label>
          <textarea className={formInputStyle} id="communicationDevicesInput" placeholder="(ie. iPhone 10, 1 talkie MRS-10T)"></textarea>

          {/* //////////////////////////////////////////////////
          Check in reports
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="checkInReportInput">Check in reports (when, to who)
            <a className="my-anchor-check-in-report text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-check-in-report" place="top" className={tooltipStyle}>If you fail to check in, your family/friends might be suceptible to consider something is wrong.</Tooltip>
          </label>
          <textarea className={formInputStyle} id="checkInReportInput" placeholder="(ie. Check in with my family every evening at 8 PM.)"></textarea>

          {/* //////////////////////////////////////////////////
          Signal coverage
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="signalCoverageInput">Signal coverage expected
            <a className="my-anchor-signal-coverage text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-signal-coverage" place="top" className={tooltipStyle}>Search for websites that show mobile coverage on a map.</Tooltip>
          </label>
          <textarea className={formInputStyle} id="signalCoverageInput" placeholder="(ie. Checked, good coverage except for a portion of the road near the glacier)"></textarea>

        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        STAYING       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-staying" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaBed className={formIconStyle}/>STAYING</legend>
          <p className={fieldsetDescriptionStyle}>To know where you might stay</p>

          {/* //////////////////////////////////////////////////
          Hotels, campsites
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="stayingInput">Hotels, campsites (infos and dates)</label>
          <textarea className={formInputStyle} id="stayingInput" placeholder="(ie. Accord hotel Reykjavik sept9 to sept10 then campsites along the road)"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        CONTACTS       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-contacts" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><RiContactsBook2Fill className={formIconStyle}/>CONTACTS</legend>
          <p className={fieldsetDescriptionStyle}>To know who to contact first if anything happens</p>

          {/* //////////////////////////////////////////////////
          Who to contact
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="contactsInput">Who to contact (name, phone, relation)
          <a className="my-anchor-contacts text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-contacts" place="top" className={tooltipStyle}>Basically all contacts that you share this form with.</Tooltip>
          </label>
          <textarea className={formInputStyle} id="contactsInput"></textarea>

        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        PERSONALITY       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-personnality" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaTheaterMasks className={formIconStyle}/>PERSONALITY</legend>
          <p className={fieldsetDescriptionStyle}>To better understand who you are</p>

          {/* //////////////////////////////////////////////////
          Autostop
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="autostopInput">Autostop</label>
          <select className={formSelectStyle} id="autostopInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="autostopInput1" value="Will never do">Will never do</option>
            <option className={formOptionStyle} id="autostopInput2" value="Only as a last resort">Only as a last resort</option>
            <option className={formOptionStyle} id="autostopInput3" value="Considered, if needed">Considered if needed</option>
          </select>

          {/* //////////////////////////////////////////////////
          Drinking
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="drinkingHabitInput">Drinking Habit</label>
          <select className={formSelectStyle} id="drinkingHabitInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="drinkingHabitInput1" value="Never drinks">No alcohol</option>
            <option className={formOptionStyle} id="drinkingHabitInput2" value="Occasionnaly drinks">Occasionnally</option>
            <option className={formOptionStyle} id="drinkingHabitInput3" value="Regularly drinks">Regularly</option>
          </select>

          {/* //////////////////////////////////////////////////
          Smoking
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="smokingHabitInput">Smoking Habit</label>
          <select className={formSelectStyle} id="smokingHabitInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="smokingHabitInput1" value="Never smokes">No</option>
            <option className={formOptionStyle} id="smokingHabitInput2" value="Occasionnaly smokes">Occasionnally</option>
            <option className={formOptionStyle} id="smokingHabitInput3" value="Regularly smokes">Regularly</option>
          </select>

          {/* //////////////////////////////////////////////////
          Drug
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="drugUseHabitInput">Drug Use Habit</label>
          <select className={formSelectStyle} id="drugUseHabitInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="drugUseHabitInput1" value="Never use drugs">No</option>
            <option className={formOptionStyle} id="drugUseHabitInput2" value="Occasionnaly use drugs">Occasionnally</option>
            <option className={formOptionStyle} id="drugUseHabitInput3" value="Regularly use drugs">Regularly</option>
          </select>

          {/* //////////////////////////////////////////////////
          Personality
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="personalityTraitInput">Personality Trait</label>
          <select className={formSelectStyle} id="personalityTraitInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="personalityTraitInput1" value="Very Extrovert (loves socializing)">Very Extrovert</option>
            <option className={formOptionStyle} id="personalityTraitInput2" value="Extrovert (enjoys socializing)">Extrovert</option>
            <option className={formOptionStyle} id="personalityTraitInput3" value="Ambivert (balance of introvert and extrovert)">Ambivert</option>
            <option className={formOptionStyle} id="personalityTraitInput4" value="Introvert (prefers solitude)">Introvert</option>
            <option className={formOptionStyle} id="personalityTraitInput5" value="Very Introvert (avoids socializing)">Very Introvert</option>
            <option className={formOptionStyle} id="personalityTraitInput6" value="Social Anxiety (anxious in social situations)">Social Anxiety</option>
          </select>

          {/* //////////////////////////////////////////////////
          Trust
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="trustLevelInput">Trust Level</label>
          <select className={formSelectStyle} id="trustLevelInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="trustLevelInput1" value="Very Trusting (trusts easily)">Very Trusting</option>
            <option className={formOptionStyle} id="trustLevelInput2" value="Trusting (generally trusts people)">Trusting</option>
            <option className={formOptionStyle} id="trustLevelInput3" value="Cautiously Trusting (trusts with caution)">Cautiously Trusting</option>
            <option className={formOptionStyle} id="trustLevelInput4" value="Wary (hesitant to trust)">Wary</option>
            <option className={formOptionStyle} id="trustLevelInput5" value="Distrustful (rarely trusts)">Distrustful</option>
            <option className={formOptionStyle} id="trustLevelInput6" value="Very Distrustful (does not trust people at all)">Very Distrustful</option>
          </select>

          {/* //////////////////////////////////////////////////
          Cautiousness
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="confidenceInput">Cautiousness</label>
          <select className={formSelectStyle} id="confidenceInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="confidenceInput1" value="Reckless">Reckless</option>
            <option className={formOptionStyle} id="confidenceInput2" value="Adventurous">Adventurous</option>
            <option className={formOptionStyle} id="confidenceInput3" value="Moderate">Moderate</option>
            <option className={formOptionStyle} id="confidenceInput4" value="Cautious">Cautious</option>
            <option className={formOptionStyle} id="confidenceInput5" value="Very cautious">Very cautious</option>
          </select>

          {/* //////////////////////////////////////////////////
          Hobbies
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="hobbiesInput">Hobbies</label>
          <textarea className={formInputStyle} id="hobbiesInput"></textarea>

        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        SKILLS       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-skills" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><LuChartCandlestick className={formIconStyle}/>SKILLS</legend>
          <p className={fieldsetDescriptionStyle}>To know what you are capable of</p>

          {/* //////////////////////////////////////////////////
          Language
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="languagesInput">Language(s) spoken (basic/fluent/native)</label>
          <textarea className={formInputStyle} id="languagesInput"></textarea>

          {/* //////////////////////////////////////////////////
          Fitness
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="fitnessConditionInput">Fitness Condition 
            <a className="my-anchor-fitness text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-fitness" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="fitnessConditionInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="fitnessConditionInput1" value="Poor (low fitness level)">Poor</option>
            <option className={formOptionStyle} id="fitnessConditionInput2" value="Average (moderate fitness level)">Average</option>
            <option className={formOptionStyle} id="fitnessConditionInput3" value="Good (high fitness level)">Good</option>
            <option className={formOptionStyle} id="fitnessConditionInput4" value="Excellent (exceptional fitness level)">Excellent</option>
          </select>

          {/* //////////////////////////////////////////////////
          Swimming
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="swimmingInput">Swimming 
            <a className="my-anchor-swimming text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-swimming" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="swimmingInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="swimmingInput1" value="Can't swim">Non-Swimmer</option>
            <option className={formOptionStyle} id="swimmingInput2" value="Basic Swimmer (can swim basic strokes)">Basic Swimmer</option>
            <option className={formOptionStyle} id="swimmingInput3" value="Proficient Swimmer (strong swimming ability)">Proficient Swimmer</option>
            <option className={formOptionStyle} id="swimmingInput4" value="Expert Swimmer (highly skilled and confident in water)">Expert Swimmer</option>
          </select>

          {/* //////////////////////////////////////////////////
          Hiking
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="hikingExperienceInput">Hiking Experience 
            <a className="my-anchor-hiking text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-hiking" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="hikingExperienceInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="hikingExperienceInput1" value="Novice (limited hiking experience)">Novice</option>
            <option className={formOptionStyle} id="hikingExperienceInput2" value="Intermediate (some hiking experience)">Intermediate</option>
            <option className={formOptionStyle} id="hikingExperienceInput3" value="Experienced (frequent hiker)">Experienced</option>
          </select>

          {/* //////////////////////////////////////////////////
          Survival skills
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="survivalSkillsInput">Survival Skills 
            <a className="my-anchor-survival-skills text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-survival-skills" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="survivalSkillsInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="survivalSkillsInput1" value="None">None</option>
            <option className={formOptionStyle} id="survivalSkillsInput2" value="Basic survival skills">Basic</option>
            <option className={formOptionStyle} id="survivalSkillsInput3" value="Intermediate survival skills">Intermediate</option>
            <option className={formOptionStyle} id="survivalSkillsInput4" value="Advanced survival skills">Advanced</option>
          </select>

          {/* //////////////////////////////////////////////////
          Fighting
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="fightingSkillsInput">Fighting ability 
            <a className="my-anchor-fighting text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-fighting" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="fightingSkillsInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="fightingSkillsInput1" value="Never got into a fight">Never got into a fight</option>
            <option className={formOptionStyle} id="fightingSkillsInput2" value="Had a few altercations">Had a few altercations</option>
            <option className={formOptionStyle} id="fightingSkillsInput3" value="Got into a few real fight">Got into a few real fight</option>
            <option className={formOptionStyle} id="fightingSkillsInput4" value="Got into many real fight">Got into many real fight</option>
          </select>

          {/* //////////////////////////////////////////////////
          Military
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="militaryExperienceInput">Military Experience</label>
          <select className={formSelectStyle} id="militaryExperienceInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="militaryExperienceInput1" value="None">None</option>
            <option className={formOptionStyle} id="militaryExperienceInput2" value="Basic training">Basic training</option>
            <option className={formOptionStyle} id="militaryExperienceInput3" value="Served in the military">Served</option>
          </select>

          {/* //////////////////////////////////////////////////
          Medic skills
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="medicSkillsInput">Medic Skills 
            <a className="my-anchor-medic-skills text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-medic-skills" place="top" className={tooltipStyle}>Should not be underestimated nor overestimated.</Tooltip>
          </label>
          <select className={formSelectStyle} id="medicSkillsInput" defaultValue="">
            <option className={formOptionStyle} value=""></option>
            <option className={formOptionStyle} id="medicSkillsInput1" value="None">None</option>
            <option className={formOptionStyle} id="medicSkillsInput2" value="Basic (rudimentary medical knowledge)">Basic</option>
            <option className={formOptionStyle} id="medicSkillsInput3" value="Intermediate (competent in basic medical procedures)">Intermediate</option>
            <option className={formOptionStyle} id="medicSkillsInput4" value="Advanced (proficient in advanced medical procedures)">Advanced</option>
          </select>

        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        GROUP MEMBERS       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-group" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaUserGroup className={formIconStyle}/>GROUP MEMBERS</legend>
          <p className={fieldsetDescriptionStyle}>To know who you are traveling with</p>

          {/* //////////////////////////////////////////////////
          Group members
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="groupMembersInput">Group members (names, age, sexe, contact infos)</label>
          <textarea className={formInputStyle} id="groupMembersInput"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        TRIP PLAN       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-trip" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaRoute className={formIconStyle}/>TRIP PLAN</legend>
          <p className={fieldsetDescriptionStyle}>To know your precise itinerary</p>

          {/* //////////////////////////////////////////////////
          Paper money subsitance
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="paperMoneyInput">Paper money subsitance (days) 
            <a className="my-anchor-paper-money text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-paper-money" place="top" className={tooltipStyle}>Do not specify the cash amount and do not share this information if the person is not completly trustful. Specify the number of days you can subsist with that money instead.</Tooltip>
          </label>
          <input className={formInputStyle} id="paperMoneyInput" type="text" placeholder="(ie. Enough for X days)"></input>

          {/* //////////////////////////////////////////////////
          Day to day plan
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="tripPlanInput">Day to day plan (stations, trails, roads, resting areas, landmarks, POIs etc.) 
            <a className="my-anchor-trip-plan text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-trip-plan" place="top" className={tooltipStyle}>Do not share this if the person is not completly trustful. You can  join a document as an alternative. Should be as descriptive as possible with precise timing and possible plan B.</Tooltip>
          </label>
          <textarea className={formInputStyle} id="tripPlanInput" placeholder="(ie. Day1..... Day2.....)"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        POTENTIAL ISSUES       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-issues" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><TbRouteOff className={formIconStyle}/>POTENTIAL ISSUES</legend>
          <p className={fieldsetDescriptionStyle}>To know if you have anticipated problems and your possible intentions</p>

          {/* //////////////////////////////////////////////////
          Planned decisions
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="intentionsInput">Planned decisions and actions for potential issues
            <a className="my-anchor-intentions text-warning"><FiAlertTriangle /></a>
            <Tooltip anchorSelect=".my-anchor-intentions" place="top" className={tooltipStyle}>What will you do if anything goes bad, backup plans and planned actions for each step of the trip.</Tooltip>
          </label>
          <textarea className={formInputStyle} id="intentionsInput"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        EQUIPMENT       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-equipment" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><BsFillBackpack2Fill className={formIconStyle}/>EQUIPMENT</legend>
          <p className={fieldsetDescriptionStyle}>To know your food and material capacities</p>

          {/* //////////////////////////////////////////////////
          Water/Food supply
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="waterFoodSupplyInput">Water/Food supply (days)</label>
          <textarea className={formInputStyle} id="waterFoodSupplyInput" placeholder="(ie. 2L water, 2 days of food)"></textarea>

          {/* //////////////////////////////////////////////////
          Survival equipment
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="survivalEquipmentInput">Survival equipment</label>
          <textarea className={formInputStyle} id="survivalEquipmentInput" placeholder="(ie. Tent, Pocket knife, Water filter, First aid kit, Waterproof clothing, Firearm, Warm clothing, Signal mirror, Whistle, Matches/lighter, Stove w/fuel, Flashlight, GPS, Compass, Map, SPOT locator device, Avalanche beacon, Avalanche probe, Bear bangers, Bear spray, Life jacket etc.)"></textarea>
        </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
        ATTACHMENTS       
        //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <fieldset id="fieldset-attachments" className={formFieldsetStyle}>
          <legend className={formLegendStyle}><FaPaperclip className={formIconStyle}/>ATTACHMENTS</legend>
          <p className={fieldsetDescriptionStyle}>To know if you will join any documents to the Travel Form</p>
          {/* //////////////////////////////////////////////////
          Attachments
          ////////////////////////////////////////////////// */}
          <label className={formLabelStyle} htmlFor="attachmentsInput">Attachments</label>
          <textarea className={formInputStyle} id="attachmentsInput" placeholder="(ie. Map, detailed planning etc.)"></textarea>
        </fieldset>

      </form>

    </div>
  );
}

export default SectionForm;
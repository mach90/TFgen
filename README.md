# TFgen - Travel Form Generator

## What is it ?
This app uses [React-PDF](https://react-pdf.org/) to generate a pdf document from a form.
The document generated is a Travel Form to be shared with trusted individuals who can take appropriate actions in case of an emergency during your trip.

## TO DO
- [/] Convert to TypeScript 🟡 (SectionForm.tsx)
- [ ] Semantic HTML 🔴
- [ ] Form validation 🔴
- [ ] JS volatile storage 🔴
- [ ] Toasts 🔴
- [ ] Redesign 🔴
- [ ] Responsiveness 🔴
- [/] Stories 🟤

### LEGEND
🟢 100% done
🟡 75% done
🟠 50% done
🟤 25% done
🔴 0% done

```ts
<div className={formControlsStyle}>
    {editing && <button className={formButtonGenerateStyle} id="submitForm" type="submit" onClick={() => ScrollTo('pdfviewer', 'smooth')}><IoSave /></button>}
    {!editing && (
    <PDFDownloadLink document={<MyDocument state={state}/>} fileName={`EPA-${state.thisIsOurDate}.pdf`}>
        {({ loading }) => loading ? <Button buttonStyle='disabled'><BiLoaderCircle /></Button> : <Button buttonStyle='download'><FaDownload /></Button>}
    </PDFDownloadLink>
    )}
    <Button buttonStyle='reset' id="resetForm" onClick={(e) => resetForm(e)}><FaTrashAlt /></Button>
</div>
```
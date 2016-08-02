import React, { Component } from 'react';
import FilteredMultiSelect from 'react-filtered-multiselect';
import $ from 'jquery';

var SYMPTOMS = [ 
  // Energy Level and Sleep
  {id: 1, name: 'Chronic fatigue'}, 
  {id: 2, name: 'Less stamina than others'},
  {id: 3, name: 'Long recovery period after any activity'},
  {id: 4, name: 'Inability to concentrate'},
  {id: 5, name: 'Sleep apnea'},
  {id: 6, name: 'Snoring'},
  {id: 7, name: 'Insomnia'},
  {id: 8, name: 'Need naps in the afternoon'},
  {id: 9, name: 'Weakness'},
  {id: 10, name: 'Wake feeling tired'},
  {id: 11, name: 'Frequently oversleep'},
  // Weight
  {id: 12, name: 'Weight gain'},
  {id: 13, name: 'Inability to lose weight'},
  {id: 14, name: 'Ascites (abdominal fluid accumulation)'},
  {id: 15, name: 'Metabolic Syndrome'},
  {id: 16, name: 'Weight loss'},
  {id: 17, name: 'Anorexia'},
  {id: 18, name: 'Heightened appetite'},
  {id: 19, name: 'Diminished appetite'},
  {id: 20, name: 'Obesity'},
  // Body Temperature
  {id: 21, name: 'Cold extremities'},
  {id: 22, name: 'Cold sweats'},
  {id: 23, name: 'Night sweats'},
  {id: 24, name: 'Heat intolerance'},
  {id: 25, name: 'Cold intolerance'},
  {id: 26, name: 'Internal shivering'},
  {id: 27, name: 'Hypothermia'},
  {id: 28, name: 'Cold hands'},
  {id: 29, name: 'Clammy hands'},
  {id: 30, name: 'Cold feet'},
  {id: 31, name: 'Excessive perspiration'},
  {id: 32, name: 'Little perspiration'},
  {id: 33, name: 'Low basal body temperature (below 97.8 degrees Fahrenheit)'},
  // Slowness
  {id: 34, name: 'Slow movements'},
  {id: 35, name: 'Slowed Achilles reflex'},
  {id: 36, name: 'Diminished reflexes'},
  {id: 37, name: 'Slow speech'},
  // Infections
  {id: 38, name: 'Frequent infections'},
  {id: 39, name: 'Chronic illness'},
  {id: 40, name: 'Low immune system'},
  {id: 41, name: 'Frequent colds'},
  {id: 42, name: 'Susceptibility to bronchitis'},
  {id: 43, name: 'Hard time recovering from infections'},
  {id: 44, name: 'Recurrent sinus infections'},
  {id: 45, name: 'Recurrent skin infections'},
  {id: 46, name: 'Recurrent ear infections'},
  {id: 47, name: 'Recurrent nose infections'},
  {id: 48, name: 'Recurrent throat infections'},
  {id: 49, name: 'Candida (yeast)'},
  {id: 50, name: 'Pelvic Inflammatory Disease (PID)'},
  {id: 51, name: 'Repeated urinary tract infections'},
  {id: 52, name: 'Upper respiratory tract infections'},
  // Related Autoimmune or Endocrine Diseases
  {id: 53, name: 'Hashimoto\'s Disease'},
  {id: 54, name: 'Graves\'s Disease'},
  {id: 55, name: 'Celiac disease'},
  {id: 56, name: 'Type 1 Diabetes'},
  {id: 57, name: 'Type 2 Diabetes'},
  {id: 58, name: 'Insulin Resistance'},
  {id: 59, name: 'Addison\'s disease'},
  {id: 60, name: 'Cushing\'s disease'},
  {id: 61, name: 'Pernicious Anemia'},
  {id: 62, name: 'Premature ovarian decline'},
  {id: 63, name: 'Premature ovarian failure'},
  {id: 64, name: 'Alopecia'},
  {id: 65, name: 'Reynaud\'s syndrome'},
  {id: 66, name: 'Sjögren\'s syndrome'},
  {id: 67, name: 'Chronic fatigue syndrome'},
  {id: 68, name: 'Rheumatoid arthritis'},
  {id: 69, name: 'Systemic lupus erythematosus'},
  {id: 70, name: 'Multiple sclerosis'},
  {id: 71, name: 'Sarcoidosis'},
  {id: 72, name: 'Scleroderma'},
  {id: 73, name: 'Vitiligo'},
  {id: 74, name: 'Psoriasis'},
  // Swelling and Thickened Skin of
  {id: 75, name: 'Eyes'},
  {id: 76, name: 'Face'},
  {id: 77, name: 'Lips'},
  {id: 78, name: 'Neck'},
  {id: 79, name: 'Hands'},
  {id: 80, name: 'Arms'},
  {id: 81, name: 'Legs'},
  {id: 82, name: 'Feet'},
  {id: 83, name: 'Ankles'},
  {id: 84, name: 'Lymphedema'},
  {id: 85, name: 'Lipodema'},
  // Mouth and Throat
  {id: 86, name: 'Difficulty swallowing'},
  {id: 87, name: 'Sensation of lump in throat'},
  {id: 88, name: 'Sensation of pressure on throat'},
  {id: 89, name: 'Pain and tenderness in neck and/or thyroid area'},
  {id: 90, name: 'Difficulty taking deep breath'},
  {id: 91, name: 'Goiter'},
  {id: 92, name: 'Thyroid nodule'},
  {id: 93, name: 'Burning sensation in throat'},
  {id: 94, name: 'Sore throats'},
  {id: 95, name: 'Swollen tongue'},
  {id: 96, name: 'Choking fits'},
  {id: 97, name: 'Distorted sense of taste (Dysgeusia)'},
  {id: 98, name: 'Salt cravings'},
  {id: 99, name: 'Sweet cravings'},
  {id: 100, name: 'Speech problems'},
  {id: 101, name: 'Dry mouth'},
  {id: 102, name: 'Halitosis'},
  {id: 103, name: 'Propensity for cavities'},
  {id: 104, name: 'Propensity for gum disease'},
  {id: 105, name: 'Low, husky, hoarse voice'},
  {id: 106, name: 'Bleeding gums'},
  {id: 107, name: 'Receding gums'},
  {id: 108, name: 'Irritated gums'},
  {id: 109, name: 'Swollen gums'},
  {id: 110, name: 'Persistent teeth clenching'},
  {id: 111, name: 'TMJ'},
  // Ears
  {id: 112, name: 'Oversensitive hearing'},
  {id: 113, name: 'Noises in ears (hissing, ringing)'},
  {id: 114, name: 'Deafness'},
  {id: 115, name: 'Tinnitus'},
  {id: 116, name: 'Internal itching of ears'},
  {id: 117, name: 'Dry, scaly ear canal'},
  {id: 118, name: 'Excess earwax'},
  {id: 119, name: 'Vertigo'},
  // Eyes
  {id: 120, name: 'Poor focusing'},
  {id: 121, name: 'Double vision'},
  {id: 122, name: 'Dry eyes'},
  {id: 123, name: 'Gritty eyes'},
  {id: 124, name: 'Achy eyes'},
  {id: 125, name: 'Blurred vision'},
  {id: 126, name: 'Drooping eyelids'},
  {id: 127, name: 'Sensitive to light'},
  {id: 128, name: 'Freuqent tics in the eyes'},
  {id: 129, name: 'Spasms of the eyelids'},
  {id: 130, name: 'Bulging of the eyeballs'},
  {id: 131, name: 'Red inflamed eyes'},
  {id: 132, name: 'Dark rings under eyes'},
  {id: 134, name: 'Puffiness around the eyes'},
  {id: 135, name: 'Rapidly shifting gaze making you feel dizzy'},
  {id: 136, name: 'Problems with night vision'},
  {id: 137, name: 'Glaucoma'},
  {id: 138, name: 'Cataracts'},
  // Hair
  {id: 139, name: ''},
  {id: 140, name: ''},
]; 

export default class SymptomEntryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSymptoms: []
    };
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.submitSymptoms = this.submitSymptoms.bind(this);
  };

  handleDeselect(index) {
    var selectedSymptoms = this.state.selectedSymptoms.slice();
    selectedSymptoms.splice(index, 1);
    this.setState({ selectedSymptoms });
  };

  handleSelectionChange(selectedSymptoms) {
    this.setState({ selectedSymptoms });
  };

  submitSymptoms() {
    console.log('you chose: ', this.state.selectedSymptoms);
    $.ajax({
      type: 'POST',
      url: '/api/symptomEntry/add',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(this.state),
      success: function(data) {
        console.log('You have cancer!', data);
      },
      error: function(err) {
        console.log('Congrats you are superhuman', err);  
      }
    })
  };

  render() {
    var { selectedSymptoms } = this.state;

    return (
      <div>
        <h2>Choose your symptoms, weakling. They will appear at the bottom.</h2>
        <h4>Energy Level and Sleep</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(0, 11)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Weight</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(11, 21)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Body Temperature</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(21, 34)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Slowness</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(34, 38)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Infections</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(38, 53)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Related Autoimmune or Endocrine Diseases</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(53, 74)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Swelling and Thickened Skin of</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(74, 85)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Mouth and Throat</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(85, 111)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Ears</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(111, 119)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        <h4>Eyes</h4>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={SYMPTOMS.slice(119, 138)}
          selectedOptions={selectedSymptoms}
          textProp='name'
          valueProp='id' />
        {selectedSymptoms.length === 0 && <p>(nothing selected yet)</p>}
        {selectedSymptoms.length > 0 && <ul>
          {selectedSymptoms.map((symptom, i) => <li key={symptom.id}>
            {`${symptom.name} `}
            <button type='button' onClick={this.handleDeselect.bind(null, i)}>
              &times;
            </button>
          </li>)}
        </ul>}
        <button onClick={this.submitSymptoms}>Submit!</button>
      </div>
    );
  }
}

// export default SymptomEntry;
//add more bad boiz;
// http://hypothyroidmom.com/300-hypothyroidism-symptoms-yes-really/
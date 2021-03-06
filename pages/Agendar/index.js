import React from 'react';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
};

LocaleConfig.defaultLocale = 'br';

export default class Agendar extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			date: null
		};
    };

    componentWillMount() {
    	if (this.props.selected !== null) {
    		this.setState({
				selected: this.props.selected
			})
		} else {
    		this.setState({
				selected: new Date().toJSON().slice(0,10).replace(/-/g,'-')
			})
		}
	}

	onDayPress = day => {
		this.props.triggerData(day);
		this.setState({
			selected: day.dateString
		});
	};

    render() {
        return (
			<CalendarList
				current = { this.state.selected }
				onDayPress = {this.onDayPress}
				onDayLongPress={(day) => {
					console.log('long selected day', day)
				}}
				markedDates={{[this.state.selected]: {selected: true}}}
				monthFormat = {'MMMM yyyy'}
				horizontal = {true}
				pagingEnabled = {true}
				pastScrollRange = {50}
				futureScrollRange = {50}
				hideArrows = {false}
				hideExtraDays = {false}
				disableMonthChange = {false}
				theme={{
					selectedDayBackgroundColor: '#085BC7',
					todayTextColor: '#085BC7',
					selectedDayTextColor: '#ffffff',
					dayTextColor: '#000',
					dotColor: '#085BC7',
					selectedDotColor: '#ffffff',
					arrowColor: '#085BC7',
				}}
			/>
        )
    }
}



// // importação das Bibliotecas 
// import React from 'react';
// import * as Application from 'expo-application';
// import { Text, View, Button } from 'react-native';
// import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';


//Funcao  Tela Login 

// export const Agendar = ({ navigation }) => (  
//     <KeyboardView>
//       <Container>
//         <Title> Agendamentos de horários</Title>
        
//         <ButtonSubmit onPress={() => navigation.navigate('#')} >
//           <TextButton>
//             Calendario
//           </TextButton>
//          </ButtonSubmit>

//          {/* <ButtonSubmit onPress={() => navigation.navigate('Agendamentos')} >
//           <TextButton>
//             Ver agendamentos
//           </TextButton>
//          </ButtonSubmit>

//          <ButtonSubmit onPress={() => navigation.navigate('valores')} >
//           <TextButton>
//             Consultar valores
//           </TextButton>
//          </ButtonSubmit> */}
        
//       </Container>
//     </KeyboardView>
//   );

// export default  Agendar;
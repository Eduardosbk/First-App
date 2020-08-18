import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textQuotes: '',
      img: require('./src/biscoito.png'),
    };
  
    this.brokeCookie = this.brokeCookie.bind(this);

    this.quotes = [
      'Follow the goods and learn with then.',
      'The good-sense worth more than knowledge.',
      'The smile is the biggest range bettwen two people.',
      'Forget about concerns and be happy.',
      'Preform the obvious , think about unlikely and conquer the improbable.',
      'Belive on miracles , but do not depend them.',
      'The biggest barrer for the success is the afraid of failure.'
    ]

  }

  brokeCookie() {
    let numberRandom = Math.floor(Math.random() * this.quotes.length);

    this.setState({
      textQuotes: ' "' + this.quotes[numberRandom] + '" '
    });
    this.setState({
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
        source={this.state.img}
        style={styles.img}
        />
        <Text style={styles.textSentence}>{this.state.textQuotes}</Text>

        <TouchableOpacity style={styles.button} onPress={this.brokeCookie}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Broke Cookie</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:250,
    height:250,
  },
  textSentence:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button:{
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});

export default App;
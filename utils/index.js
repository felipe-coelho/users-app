export default class Utils {
  static getGenderTranslate (gender) {
    const genderToLowerCase = gender.toLowerCase()
    if (genderToLowerCase === 'female') {
      return 'Feminino'
    }

    return 'Masculino'
  }
}

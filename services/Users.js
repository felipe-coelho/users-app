import users from './users.json'

export default {
  getFullData () {
    return users.results.map((user, index) => {
      return {
        id: index,
        ...user
      }
    }).slice(0, 50)
  },

  getUsers () {
    return this.getFullData()
      .map(({ id, gender, name, location, picture, registered }) => {
        return {
          id,
          gender,
          name: `${name.first} ${name.last}`,
          location: {
            street: location.street,
            city: location.city,
            state: location.state,
            postcode: location.postcode
          },
          thumbnail: picture.medium,
          registeredAge: registered.age
        }
      })
  },

  getUserDetails (userId) {
    return this.getFullData()
      .map(({ id, gender, name, location, email, picture, registered, phone, cell, dob }) => {
        return {
          id,
          gender,
          name: `${name.first} ${name.last}`,
          location: {
            street: location.street,
            city: location.city,
            state: location.state,
            postcode: location.postcode
          },
          email,
          phone,
          cell,
          picture: picture.large,
          registeredDate: registered.date,
          dob: dob.date
        }
      })
      .find(user => user.id === userId)
  }
}

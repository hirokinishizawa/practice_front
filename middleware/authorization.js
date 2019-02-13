const policies = {
  'organizer-only': user => {
    return user.is_organizer
  }
}

const satisfiedAll = (user, givenPolicies) => {
  for (let policy of givenPolicies) {
    if (policies[policy]) {
      return policies[policy](user)
    }
  }
  return false
}

export default ({ store, route, error }) => {
  const user = store.getters['user/user']
  const givenPolicies = route.meta.map(meta => {
    return meta.authorization.policy
  })
  const can = satisfiedAll(user, givenPolicies)
  if (!can) {
    return error({
      statusCode: 404
    })
  }
}

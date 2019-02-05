const policies = {
  'organizer-only': user => {
    return user.is_organizer
  }
}

const satisfiedAll = (user, givenPolicies) => {
  let can = false
  for (let policy of givenPolicies) {
    if (policies[policy]) {
      can = policies[policy](user)
      // ひとつでも false ならエラー
      if (!can) {
        return false
      }
    }
  }
  return can
}

export default ({ store, route, error }) => {
  const user = store.getters['user/user']
  const givenPolicies = route.meta.map(meta => {
    return meta.authorization.policy
  })
  let can = satisfiedAll(user, givenPolicies)
  if (!can) {
    return error({
      statusCode: 404
    })
  }
}

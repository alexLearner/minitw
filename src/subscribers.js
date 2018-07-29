import localStore from "./modules/localStore";

export const updatePostsInStorage = store => {
  let currentValue;

  return () => {
    let prevValue = currentValue;

    currentValue = store.getState().posts.data;

    if (prevValue !== currentValue) {
      localStore.set("posts", currentValue)
    }
  };
};

export const updateUsersInStorage = store => {
  let currentValue;

  return () => {
    let prevValue = currentValue;

    currentValue = store.getState().users.data;

    if (prevValue !== currentValue) {
      localStore.set("users", currentValue)
    }
  };
};

export const updateUserInStorage = store => {
  let currentValue;

  return () => {
    let prevValue = currentValue;

    currentValue = store.getState().user;

    if (prevValue !== currentValue) {
      if (currentValue.isAuth) {
        localStore.set("user", currentValue)
      } else {
        localStore.remove("user")
      }
    }
  };
};
// Version 1.0 - cclick Verified Checkmarks Module
// Verified check for certain users

const VERIFIED_USERS_IDS = ["user_2OpOA0mDuiNr2t29VJ1Gy0rMOMJ"];

export async function verifyUser(user: any) {
  if (VERIFIED_USERS_IDS.includes(user.id)) {
    return true;
  } else {
    return false;
  }
}

export async function verifyUserById(id: string) {
  if (VERIFIED_USERS_IDS.includes(id)) {
    return true;
  } else {
    return false;
  }
}

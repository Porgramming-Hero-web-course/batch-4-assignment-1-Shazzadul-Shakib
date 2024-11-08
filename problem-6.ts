interface ProfileInfo {
  name: string;
  age: number;
  email: string;
}

function updateProfile(
  profileInfo: ProfileInfo,
  updatedInfo: Partial<ProfileInfo>
): ProfileInfo {
  return { ...profileInfo, ...updatedInfo };
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 18 }));

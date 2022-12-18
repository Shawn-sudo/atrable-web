class UserProfile {
  displayName?: string;
  displayId?: string;
  profilePhotoURL?: string;

  constructor(props: {
    displayName: string | undefined;
    displayId: string | undefined;
    profilePhotoURL: string | undefined;
  }) {
    this.displayName = props.displayName;
    this.displayId = props.displayId;
    this.profilePhotoURL = props.profilePhotoURL;
  }
}

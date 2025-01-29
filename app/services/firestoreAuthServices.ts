import firestore from '@react-native-firebase/firestore';

/**
 * Fetch onboarding status for the given user UID.
 * @param {string} uid - Firebase Authentication ID.
 * @returns {Promise<object>} - Onbject containing success, onboardingComplete, and error.
 */
export const getUserOnboardingStatus = async (uid: string) => {
  // Cancel operation if no UID is provided.
  if (!uid) {
    return {
      success: false,
      onboardingComplete: false,
      error: 'User ID is required',
    };
  }

  try {
    // Fetch the user document from Firestore.
    const userDocument = await firestore().collection('users').doc(uid).get();

    // Check if the user document exists for safety.
    if (userDocument.exists) {
      return {
        success: true,
        onboardingComplete: userDocument.data()!.onBoarded,
        error: null,
      };
    } else {
      return {
        success: false,
        onboardingComplete: false,
        error: 'The user cannot be found',
      };
    }
  } catch (error: any) {
    return {
      success: false,
      onboardingComplete: false,
      error: error.message,
    };
  }
};

export const setOnboardingStatus = async (uid: string, status: boolean) => {
  try {
    await firestore().collection('users').doc(uid).update({
      onBoarded: status,
    });
    return {
      success: true,
      error: null,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};

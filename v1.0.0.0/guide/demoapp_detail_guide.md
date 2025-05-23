# Demo App Guide (V1.0.0.0)

## step1
<img src="images/index.png" width="600" height="500" />

- The 'Open DID Wallet' screen appears, guiding the user through the registration process step by step.  
- Confirm that Step 1 is in progress, then click the `NEXT` button.  
- Step 1 involves entering the user's information and setting the wallet's lock type.  

## user_info
<img src="images/user_info.png" width="600" height="500" />

- The 'User Information' screen appears where the user inputs their details.  
- Fields include `First Name` and `Last Name`, which are used for:  
  - Generating the user's PII with salt.  
  - Displaying user info when showing issued VCs in the app.  

## lock_popup
<img src="images/lock_popup.png" width="600" height="500"/>

- This is the wallet lock type setup screen, which is not supported in this demo.  

## step2
<img src="images/step2.png" width="600" height="500"/>

- Confirm that Step 2 is in progress, then click the `NEXT` button.  
- Step 2 involves generating a DID Document and registering an authentication method.  

## pin_registration
<img src="./images/pin_registration.png" width="600" height="500"/>

- Register a 6-digit PIN to be used as an authentication method for signing.  
- Once registered, the user's DID Document will be created.  

## finger_popup
<img src="./images/finger_popup.png" width="600" height="500"/>

- A popup asks whether to register the user's fingerprint for signing.  
- Only PIN registration is supported in this demo.  

## step3
<img src="images/step3.png" width="600" height="500"/>

- Confirm that Step 3 is in progress, then click the `NEXT` button.  
- Step 3 involves signing and registering the user's DID Document.  

## pin_authentication
<img src="./images/pin_authentication.png" width="600" height="500"/>

- Enter the 6-digit PIN to sign and register the user's DID Document.  

## main
<img src="./images/main.png" width="600" height="500"/>

- After initial registration, if no VC has been issued, the message `"No certificate has been issued."` is shown.  

<img src="./images/main2.png" width="600" height="500"/>

- If VCs have been issued, they are displayed in a list.  

- Two buttons are available at the bottom:  
  - ADD VC: Issues a VC via User Initiated method.  
  - SCAN QR: Scans a QR code for VC issuance or VP submission via Issuer Initiated method.  

- This demo supports issuing two types of VCs:  
  - National ID: User Initiated  
  - mDL (Mobile Driving License): Issuer Initiated  

## add_vc
<img src="./images/add_vc.png" width="600" height="500"/>

- To issue a VC, select `National ID Plan` from the available list.  

## scan_qr_vc
<img src="./images/scan_qr_vc.png" width="600" height="500"/>

- Scan a QR code to issue a VC.  
- In this demo, the scan screen is shown without performing an actual scan.  

## issue_profile
<img src="./images/issue_profile.png" width="600" height="500"/>
<img src="./images/issue_profile2.png" width="600" height="500"/>

- Confirm information such as issuer, VC name, and issuance date.  

## vc_info
<img src="./images/vc_info.png" width="600" height="500"/>

- Enter the following information to proceed with issuance:  
  - Birthdate  
  - Address  
  - License Number  
  - Issue Date  

## vc_authentication
<img src="./images/vc_authentication.png" width="600" height="500"/>

- Enter the previously set PIN.  

## issue_result
<img src="./images/issue_result.png" width="600" height="500"/>

- Confirmation message is shown after the VC is issued.  

## scan_qr_vp
<img src="./images/scan_qr_vp.png" width="600" height="500"/>

- Scan a QR code to submit a VP.  
- In this demo, the scan screen is shown without performing an actual scan.  

## verify_profile
<img src="./images/verify_profile.png" width="600" height="500"/>

- Confirm the claim information to be submitted.  

## vp_authentication
<img src="./images/vp_authentication.png" width="600" height="500"/>

- Enter the previously set PIN.  

## verify_result
<img src="./images/verify_result.png" width="600" height="500"/>

- Confirmation message is shown after VP submission is completed.  

## detail_mdl
<img src="./images/detail_mdl.png" width="600" height="500"/>

- View detailed information of the issued mDL.  

## detail_nid
<img src="./images/detail_nid.png" width="600" height="500"/>

- View detailed information of the issued National ID.  

## issue_result
<img src="./images/issue_result.png" width="600" height="500"/>

- Confirmation message is shown after the VC is issued.  

## settings
<img src="./images/settings.png" width="600" height="500"/>

- Displays the URLs of TAS and Verifier. Random values are shown in this demo.  
- After the user's DID Document is created, the DID can be checked here.  

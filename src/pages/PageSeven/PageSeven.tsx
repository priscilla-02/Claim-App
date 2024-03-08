import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { setSignature } from '../../store/reducer/UserSlice'
import { open, close } from '../../store/reducer/PopupSlice'
import SignatureCanvas from 'react-signature-canvas'
import {
    Container,
    ContinueButton,
    Header,
    Title,
} from '../../styles/globalStyles'
import {
    CanvasOverlay,
    CanvasPlaceholder,
    DisclaimerText,
    DisclaimerTextSpan,
    ReviewText,
    ReviewTextSpan,
    SignatureContainer,
    SignatureHeader,
    SignaturePad,
    SignaturePreview,
} from './PageSevenStyles'

function PageSeven() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [signatureDraw, setSignatureDraw] = useState<string | undefined>(
        undefined
    )
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const signCanvas = useRef<SignatureCanvas>(null)

    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleSignatureStart = () => {
        setIsDrawing(true)
    }

    const handleSignatureEnd = () => {
        setSignatureDraw(
            signCanvas.current?.getTrimmedCanvas().toDataURL('image/png')
        )
    }

    const handleClaimSumbit = () => {
        if (signatureDraw) {
            dispatch(close())
            dispatch(setSignature(signatureDraw))
            navigate('/page/8')
        } else {
            dispatch(open({ text: 'Missing Signature', type: 'error' }))
        }
    }

    return (
        <Container>
            <Header>
                You’re almost finished, {firstNameState}. You just need to
                review this…
            </Header>
            <Title>Please sign here to submit your Plevin claim.</Title>

            <SignatureContainer>
                <SignatureHeader>
                    DRAW SIGNATURE WITH MOUSE ON DESKTOP / FINGER ON MOBILE OR
                    TABLET
                </SignatureHeader>
                <SignaturePad>
                    <CanvasOverlay>
                        {!isDrawing && (
                            <CanvasPlaceholder
                                src="/signature.svg"
                                alt="E-Signature Placeholder"
                            />
                        )}
                        <SignatureCanvas
                            penColor="black"
                            canvasProps={{
                                width: 332,
                                height: 206,
                                className: 'sigCanvas',
                            }}
                            ref={signCanvas}
                            onBegin={handleSignatureStart}
                            onEnd={handleSignatureEnd}
                        />
                    </CanvasOverlay>
                </SignaturePad>
            </SignatureContainer>
            {signatureDraw && (
                <>
                    <SignaturePreview>Signature Preview:</SignaturePreview>
                    <img src={signatureDraw} alt="Signautre Preview" />
                </>
            )}
            <ReviewText>
                Review your <ReviewTextSpan>claim pack here</ReviewTextSpan>.
            </ReviewText>

            <DisclaimerText>
                <DisclaimerTextSpan>Disclaimer:</DisclaimerTextSpan> By
                proceeding, you agree to be the terms listed in Privacy Policy.
                Additionally, you agree to be contacted by Veriform Limited,
                OPOP Services Limited, or any of our affiliated partners in
                regards to your claim and future opportunities.
            </DisclaimerText>
            <ContinueButton onClick={() => handleClaimSumbit()}>
                Submit Claim
            </ContinueButton>
        </Container>
    )
}

export default PageSeven

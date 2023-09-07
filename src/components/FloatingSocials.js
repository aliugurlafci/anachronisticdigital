import React from 'react'
import { Container, Button, Link, lightColors } from 'react-floating-action-button'

export const FloatingSocials = () => {
    return (
        <div className='section floating_socials'>
            <Container className="fixed-fs">
                <Link href="https://t.me/Solversedigitall"
                    tooltip="Telegram"
                    icon="fab fa-telegram"
                    styles={{ backgroundColor: lightColors.white, color: "#3b5998" }} />
                <Link href="https://t.me/SolverseDigital"
                    tooltip="Telegram Announcement"
                    icon="fab fa-telegram"
                    styles={{ backgroundColor: lightColors.white, color: "#229ED9" }} />
                <Link href="https://instagram.com/solverse_digital?igshid=YmMyMTA2M2Y="
                    tooltip="Instagram"
                    icon="fab fa-instagram"
                    styles={{ backgroundColor: "#bc2a8d", color: "white" }} />
                <Link href="https://twitter.com/SolverseDigital?t=rXMEcgj7jGsPpl-azU-Mfw&s=09"
                    tooltip="Twitter"
                    icon="fab fa-twitter"
                    styles={{ backgroundColor: "#1DA1F2", color: lightColors.white }} />
                <Button
                    tooltip="Social Platforms"
                    icon="fas fa-users"
                    rotate={true}
                    aria-label="Social Platforms"
                    styles={{ backgroundColor: "rgb(29, 173, 72)", color: lightColors.white }} />
            </Container>
        </div>
    )
}
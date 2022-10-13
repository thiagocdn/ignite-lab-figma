import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './text-input'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your email' />
        ],
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputInputProps> = {
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your email' />
    }
}

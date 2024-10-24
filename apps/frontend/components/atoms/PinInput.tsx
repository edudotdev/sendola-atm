'use client';
import React, { useState } from 'react'
import { Credentials } from '@/components/molecules/LoginForm';

interface Props {
  credentials: Credentials
  setCredentials: (value: Credentials) => void
}

export const PinInput = ({
  credentials,
  setCredentials
}: Props) => {
  const [pin, setPin] = useState<string[]>(['', '', '', ''])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)

      setCredentials({
        ...credentials,
        pin: newPin.join('')
      })

      if (index < 3) {
        const nextInput = document.getElementById(`pin-input-${index + 1}`)
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newPin = [...pin];
      newPin[index] = '';
      setPin(newPin);

      if (index > 0) {
        const prevInput = document.getElementById(`pin-input-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-800 font-semibold text-sm">Pin</label>
      <div className='flex justify-between'>
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-input-${index}`}
            type="password"
            maxLength={1}
            placeholder='0'
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="border border-slate-200 text-center w-16 h-16 rounded-md text-2xl text-slate-600"
          />
        ))}
      </div>
    </div>
  )
}
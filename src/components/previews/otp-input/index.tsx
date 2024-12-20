import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const InputOTPDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-white text-2xl font-mono flex">Enter OTP</p>
      <InputOTP className="flex-row items-center gap-1" maxLength={6}>
        <InputOTPGroup className="gap-1">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPGroup className="gap-1">
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormLabel } from "../ui/form";

export default function PasswordDialog({ passwordText }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Handle password change logic here
      console.log("Password changed successfully");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button>
          <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#1F3E7C]">
            Edit
          </FormLabel>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[410px]">
        <DialogHeader>
          <DialogTitle className="w-[305px] leading-6">
            Are you sure you want to change your {passwordText} ?
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mt-4">
                <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1 block w-[355px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-[355px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-[355px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-[#1F3E7C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#1F3E7C] focus:outline-none focus:ring-2 focus:ring-[#1F3E7C] focus:ring-offset-2"
                >
                  Change Password
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

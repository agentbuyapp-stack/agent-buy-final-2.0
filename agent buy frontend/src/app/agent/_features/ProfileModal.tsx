"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, Package, CreditCard, Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ProfileFormData {
  name: string;
  phone: string;
  email: string;
  cargo: string;
  accountNumber: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const ProfileModal = ({ open, onOpenChange }: ProfileModalProps) => {
  const { user } = useUser();
  const clerkId = user?.id;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    phone: "",
    email: "",
    cargo: "",
    accountNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(`${BACKEND_URL}/profile/createProfile/${clerkId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          accountNumber: formData.accountNumber,
        }),
      });
      console.log("Profile data:", formData);
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      onOpenChange(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-white">
            Профайл мэдээлэл
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
              <User className="w-4 h-4" />
              Нэр
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Нэрээ оруулна уу"
              value={formData.name}
              onChange={handleInputChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
              <Phone className="w-4 h-4" />
              Утасны дугаар
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Утасны дугаараа оруулна уу"
              value={formData.phone}
              onChange={handleInputChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              <Mail className="w-4 h-4" />
              И-мэйл
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="И-мэйл хаягаа оруулна уу"
              value={formData.email}
              onChange={handleInputChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cargo" className="text-gray-700 dark:text-gray-300">
              <Package className="w-4 h-4" />
              Карго
            </Label>
            <Input
              id="cargo"
              name="cargo"
              placeholder="Карго нэрээ оруулна уу (заавал биш)"
              value={formData.cargo}
              onChange={handleInputChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="accountNumber"
              className="text-gray-700 dark:text-gray-300"
            >
              <CreditCard className="w-4 h-4" />
              Дансны дугаар {"(IBAN дугаар заавал оруулна уу)"}
            </Label>
            <Input
              id="accountNumber"
              name="accountNumber"
              placeholder="Дансны дугаараа оруулна уу (заавал биш)"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>
          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Болих
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Хадгалж байна...
                </>
              ) : (
                "Хадгалах"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

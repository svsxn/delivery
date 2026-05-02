"use client";

import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogClose,
  Dialog,
} from "@/components/ui/dialog";
import { FieldGroup, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function AddDeliveryDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Dodaj</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="w-80">
        <form
          className="contents"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            console.log(Object.fromEntries(formData));

            setOpen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Dodaj kurs</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="app">Platforma</Label>
              <Select name="app" required>
                <SelectTrigger id="app">
                  <SelectValue placeholder="Wybierz platformę" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ubereats" className="cursor-pointer">
                      Uber Eats
                    </SelectItem>
                    <SelectItem value="glovo" className="cursor-pointer">
                      Glovo
                    </SelectItem>
                    <SelectItem value="wolt" className="cursor-pointer">
                      Wolt
                    </SelectItem>
                    <SelectItem value="bolt" className="cursor-pointer">
                      Bolt Food
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="amount">Zarobek (zł)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                className="no-spinner"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Anuluj
              </Button>
            </DialogClose>
            <Button type="submit">Zapisz</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

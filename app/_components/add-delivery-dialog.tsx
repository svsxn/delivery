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

export function AddDeliveryDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Dodaj</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Dodaj dostawę</DialogTitle>
          <DialogHeader></DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="amount-1">Ilość</Label>
              <Input id="amount-1" name="amount" defaultValue="0"></Input>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Anuluj</Button>
            </DialogClose>
            <Button type="submit">Dodaj</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

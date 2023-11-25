import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { FC, ReactNode } from 'react';

interface AlertDialogCustomProps {
  children: ReactNode;
  title: string;
  description?: string;
  nextAction: () => void;
}
const AlertDialogCustom: FC<AlertDialogCustomProps> = ({
  children,
  title,
  description,
  nextAction,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-center gap-x-8 py-2">
          <AlertDialogCancel className="my-auto">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => nextAction()} className="my-auto">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogCustom;

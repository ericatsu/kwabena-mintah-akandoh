import { Alert, AlertDescription } from "@/components/ui/alert";
import { XCircle, CheckCircle } from "lucide-react";

interface AlertDialogProps {
    type: 'success' | 'error';
    message: string;
    onClose: () => void;
}

export const AlertDialog = ({ type, message, onClose }: AlertDialogProps) => {
    return (
        <Alert className={`mb-4 ${type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
                {type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className="ml-2">{message}</AlertDescription>
            </div>
        </Alert>
    );
};
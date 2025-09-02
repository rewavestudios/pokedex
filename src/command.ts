// Defines the structure that ALL commands must follow
export type CLICommand = {
  name: string;           // The command word users type
  description: string;    // Short explanation shown in help menu
  callback: (commands: Record<string, CLICommand>) => void;   // Function to execute when command is called
};

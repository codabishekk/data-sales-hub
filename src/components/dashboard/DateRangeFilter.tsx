import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateRangeFilterProps {
  onDateRangeChange: (range: DateRange) => void;
  defaultRange?: DateRange;
}

export function DateRangeFilter({ onDateRangeChange, defaultRange }: DateRangeFilterProps) {
  const [date, setDate] = useState<DateRange>(defaultRange || {
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date()
  });

  const handleDateSelect = (newDate: DateRange | undefined) => {
    if (newDate) {
      setDate(newDate);
      onDateRangeChange(newDate);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      
      <div className="flex space-x-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const newRange = {
              from: new Date(new Date().setDate(new Date().getDate() - 7)),
              to: new Date()
            };
            setDate(newRange);
            onDateRangeChange(newRange);
          }}
        >
          7 days
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const newRange = {
              from: new Date(new Date().setDate(new Date().getDate() - 30)),
              to: new Date()
            };
            setDate(newRange);
            onDateRangeChange(newRange);
          }}
        >
          30 days
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const newRange = {
              from: new Date(new Date().setDate(new Date().getDate() - 90)),
              to: new Date()
            };
            setDate(newRange);
            onDateRangeChange(newRange);
          }}
        >
          90 days
        </Button>
      </div>
    </div>
  );
}
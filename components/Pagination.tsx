import { Button } from "@/components/ui/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </Button>

      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </Button>
    </div>
  );
}

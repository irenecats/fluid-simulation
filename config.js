const config = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 512, //1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 2.75,
  VELOCITY_DISSIPATION: 1,
  PRESSURE: 0,
  PRESSURE_ITERATIONS: 20,
  CURL: 0,
  SPLAT_RADIUS: 0.7,
  SPLAT_FORCE: 4000,
  BACK_COLOR: { r: 7, g: 26, b: 69 },
  COLOR_UPDATE_SPEED: 0.75,
  CURRENT_COLOR_IDX: 0,
  COLOR_PALETTE: [
    { r: 0.057, g: 0.31, b: 1 },
    { r: 0.67, g: 0.38, b: 1 },
    { r: 0.76, g: 0.46, b: 1 },
    { r: 0.85, g: 0.55, b: 1 },
    { r: 0.95, g: 0.63, b: 1 },
    { r: 0.98, g: 0.77, b: 0.85 },
    { r: 1, g: 0.89, b: 0.7 },
    { r: 0.68, g: 0.95, b: 0.77 },
    { r: 0.35, g: 1, b: 0.88 },
    { r: 0.33, g: 0.69, b: 0.85 },
    { r: 0.31, g: 0.38, b: 0.87 },
    { r: 0.22, g: 0.25, b: 0.67 },
    { r: 0.12, g: 0.12, b: 0.46 },
    { r: 0.35, g: 0.2, b: 0.73 },
  ],
  POS_UPDATE_SPEED: 60,
  CURRENT_POS_IDX: 0,
  POSITION_INTERPOLATION: 0,
  MOUSE_STOP_TIMER: 900,
  FOLLOW_MOUSE: false,
  AMMOUNT: { x: 0, y: 0 },
  DEFAULT_PATH: [
    { x: 111, y: 1 },
    { x: 111, y: 1 },
    { x: 113, y: 3 },
    { x: 117, y: 7 },
    { x: 120, y: 10 },
    { x: 124, y: 12 },
    { x: 128, y: 17 },
    { x: 134, y: 21 },
    { x: 139, y: 25 },
    { x: 145, y: 30 },
    { x: 153, y: 35 },
    { x: 162, y: 42 },
    { x: 166, y: 45 },
    { x: 172, y: 49 },
    { x: 178, y: 54 },
    { x: 184, y: 59 },
    { x: 187, y: 60 },
    { x: 193, y: 64 },
    { x: 199, y: 69 },
    { x: 203, y: 72 },
    { x: 207, y: 74 },
    { x: 211, y: 79 },
    { x: 215, y: 83 },
    { x: 222, y: 87 },
    { x: 228, y: 92 },
    { x: 232, y: 96 },
    { x: 238, y: 101 },
    { x: 241, y: 103 },
    { x: 245, y: 108 },
    { x: 249, y: 110 },
    { x: 253, y: 114 },
    { x: 257, y: 119 },
    { x: 260, y: 121 },
    { x: 263, y: 127 },
    { x: 268, y: 135 },
    { x: 271, y: 139 },
    { x: 273, y: 143 },
    { x: 275, y: 149 },
    { x: 278, y: 155 },
    { x: 281, y: 163 },
    { x: 281, y: 168 },
    { x: 282, y: 176 },
    { x: 284, y: 184 },
    { x: 285, y: 191 },
    { x: 285, y: 199 },
    { x: 285, y: 206 },
    { x: 285, y: 214 },
    { x: 285, y: 221 },
    { x: 285, y: 229 },
    { x: 285, y: 234 },
    { x: 285, y: 241 },
    { x: 284, y: 247 },
    { x: 280, y: 255 },
    { x: 277, y: 261 },
    { x: 274, y: 267 },
    { x: 270, y: 273 },
    { x: 265, y: 279 },
    { x: 260, y: 286 },
    { x: 254, y: 292 },
    { x: 249, y: 298 },
    { x: 245, y: 303 },
    { x: 240, y: 309 },
    { x: 236, y: 315 },
    { x: 231, y: 321 },
    { x: 226, y: 328 },
    { x: 219, y: 338 },
    { x: 214, y: 345 },
    { x: 209, y: 353 },
    { x: 202, y: 362 },
    { x: 197, y: 370 },
    { x: 192, y: 379 },
    { x: 189, y: 384 },
    { x: 188, y: 392 },
    { x: 183, y: 401 },
    { x: 180, y: 407 },
    { x: 177, y: 413 },
    { x: 174, y: 419 },
    { x: 171, y: 424 },
    { x: 168, y: 430 },
    { x: 165, y: 436 },
    { x: 162, y: 444 },
    { x: 159, y: 450 },
    { x: 157, y: 458 },
    { x: 156, y: 462 },
    { x: 153, y: 470 },
    { x: 151, y: 475 },
    { x: 150, y: 481 },
    { x: 149, y: 485 },
    { x: 147, y: 490 },
    { x: 146, y: 496 },
    { x: 145, y: 500 },
    { x: 145, y: 505 },
    { x: 143, y: 511 },
    { x: 143, y: 516 },
    { x: 142, y: 522 },
    { x: 142, y: 527 },
    { x: 140, y: 533 },
    { x: 139, y: 538 },
    { x: 139, y: 546 },
    { x: 139, y: 551 },
    { x: 139, y: 556 },
    { x: 138, y: 564 },
    { x: 136, y: 569 },
    { x: 136, y: 577 },
    { x: 136, y: 584 },
    { x: 136, y: 590 },
    { x: 136, y: 597 },
    { x: 136, y: 602 },
    { x: 136, y: 609 },
    { x: 136, y: 615 },
    { x: 136, y: 620 },
    { x: 137, y: 627 },
    { x: 138, y: 633 },
    { x: 138, y: 638 },
    { x: 141, y: 644 },
    { x: 142, y: 650 },
    { x: 144, y: 658 },
    { x: 147, y: 663 },
    { x: 150, y: 669 },
    { x: 153, y: 675 },
    { x: 154, y: 681 },
    { x: 157, y: 689 },
    { x: 162, y: 695 },
    { x: 167, y: 704 },
    { x: 172, y: 710 },
    { x: 177, y: 718 },
    { x: 184, y: 727 },
    { x: 188, y: 731 },
    { x: 193, y: 740 },
    { x: 198, y: 746 },
    { x: 202, y: 752 },
    { x: 209, y: 761 },
    { x: 213, y: 765 },
    { x: 220, y: 771 },
    { x: 225, y: 778 },
    { x: 233, y: 785 },
    { x: 242, y: 791 },
    { x: 246, y: 796 },
    { x: 257, y: 805 },
    { x: 266, y: 810 },
    { x: 270, y: 814 },
    { x: 278, y: 819 },
    { x: 289, y: 826 },
    { x: 298, y: 833 },
    { x: 306, y: 838 },
    { x: 317, y: 846 },
    { x: 327, y: 851 },
    { x: 330, y: 853 },
    { x: 340, y: 858 },
    { x: 346, y: 861 },
    { x: 356, y: 866 },
    { x: 367, y: 870 },
    { x: 375, y: 873 },
    { x: 388, y: 879 },
    { x: 398, y: 880 },
    { x: 410, y: 884 },
    { x: 420, y: 886 },
    { x: 433, y: 886 },
    { x: 445, y: 887 },
    { x: 455, y: 889 },
    { x: 465, y: 889 },
    { x: 477, y: 891 },
    { x: 487, y: 891 },
    { x: 499, y: 891 },
    { x: 511, y: 891 },
    { x: 523, y: 891 },
    { x: 538, y: 891 },
    { x: 554, y: 891 },
    { x: 567, y: 891 },
    { x: 584, y: 890 },
    { x: 601, y: 886 },
    { x: 616, y: 882 },
    { x: 635, y: 877 },
    { x: 648, y: 873 },
    { x: 665, y: 867 },
    { x: 681, y: 859 },
    { x: 689, y: 854 },
    { x: 698, y: 848 },
    { x: 704, y: 841 },
    { x: 717, y: 834 },
    { x: 726, y: 825 },
    { x: 735, y: 816 },
    { x: 742, y: 809 },
    { x: 749, y: 799 },
    { x: 756, y: 790 },
    { x: 759, y: 782 },
    { x: 766, y: 769 },
    { x: 770, y: 761 },
    { x: 773, y: 752 },
    { x: 778, y: 742 },
    { x: 781, y: 734 },
    { x: 785, y: 726 },
    { x: 788, y: 715 },
    { x: 790, y: 705 },
    { x: 791, y: 697 },
    { x: 793, y: 689 },
    { x: 793, y: 682 },
    { x: 795, y: 674 },
    { x: 795, y: 669 },
    { x: 795, y: 663 },
    { x: 795, y: 660 },
    { x: 795, y: 656 },
    { x: 795, y: 652 },
    { x: 795, y: 650 },
    { x: 795, y: 646 },
    { x: 795, y: 645 },
    { x: 794, y: 642 },
    { x: 793, y: 641 },
    { x: 792, y: 640 },
    { x: 791, y: 640 },
    { x: 790, y: 640 },
    { x: 789, y: 640 },
    { x: 788, y: 640 },
    { x: 786, y: 641 },
    { x: 785, y: 642 },
    { x: 783, y: 644 },
    { x: 779, y: 645 },
    { x: 776, y: 648 },
    { x: 772, y: 652 },
    { x: 771, y: 653 },
    { x: 767, y: 658 },
    { x: 765, y: 661 },
    { x: 760, y: 667 },
    { x: 756, y: 671 },
    { x: 753, y: 673 },
    { x: 749, y: 677 },
    { x: 743, y: 684 },
    { x: 736, y: 690 },
    { x: 732, y: 693 },
    { x: 726, y: 698 },
    { x: 722, y: 700 },
    { x: 718, y: 703 },
    { x: 712, y: 706 },
    { x: 707, y: 709 },
    { x: 698, y: 714 },
    { x: 692, y: 717 },
    { x: 682, y: 720 },
    { x: 671, y: 726 },
    { x: 661, y: 729 },
    { x: 655, y: 732 },
    { x: 647, y: 735 },
    { x: 636, y: 739 },
    { x: 626, y: 742 },
    { x: 616, y: 746 },
    { x: 610, y: 747 },
    { x: 600, y: 751 },
    { x: 592, y: 752 },
    { x: 581, y: 756 },
    { x: 574, y: 757 },
    { x: 564, y: 759 },
    { x: 555, y: 762 },
    { x: 545, y: 764 },
    { x: 536, y: 764 },
    { x: 525, y: 765 },
    { x: 515, y: 767 },
    { x: 505, y: 769 },
    { x: 489, y: 769 },
    { x: 476, y: 769 },
    { x: 464, y: 769 },
    { x: 452, y: 769 },
    { x: 440, y: 769 },
    { x: 426, y: 769 },
    { x: 416, y: 769 },
    { x: 406, y: 769 },
    { x: 394, y: 769 },
    { x: 387, y: 769 },
    { x: 372, y: 769 },
    { x: 362, y: 766 },
    { x: 349, y: 763 },
    { x: 341, y: 759 },
    { x: 338, y: 753 },
    { x: 330, y: 750 },
    { x: 324, y: 746 },
    { x: 318, y: 743 },
    { x: 309, y: 738 },
    { x: 303, y: 731 },
    { x: 294, y: 722 },
    { x: 287, y: 716 },
    { x: 281, y: 707 },
    { x: 275, y: 699 },
    { x: 270, y: 688 },
    { x: 265, y: 677 },
    { x: 260, y: 669 },
    { x: 258, y: 659 },
    { x: 255, y: 651 },
    { x: 253, y: 643 },
    { x: 252, y: 635 },
    { x: 250, y: 625 },
    { x: 250, y: 618 },
    { x: 250, y: 612 },
    { x: 250, y: 605 },
    { x: 250, y: 600 },
    { x: 250, y: 594 },
    { x: 252, y: 589 },
    { x: 255, y: 580 },
    { x: 258, y: 576 },
    { x: 260, y: 574 },
    { x: 263, y: 570 },
    { x: 267, y: 567 },
    { x: 270, y: 566 },
    { x: 272, y: 565 },
    { x: 275, y: 563 },
    { x: 278, y: 563 },
    { x: 281, y: 563 },
    { x: 285, y: 562 },
    { x: 286, y: 562 },
    { x: 288, y: 562 },
    { x: 290, y: 562 },
    { x: 292, y: 562 },
    { x: 296, y: 562 },
    { x: 300, y: 562 },
    { x: 304, y: 562 },
    { x: 310, y: 564 },
    { x: 312, y: 565 },
    { x: 318, y: 568 },
    { x: 324, y: 571 },
    { x: 328, y: 574 },
    { x: 332, y: 576 },
    { x: 342, y: 583 },
    { x: 346, y: 587 },
    { x: 352, y: 592 },
    { x: 363, y: 599 },
    { x: 371, y: 604 },
    { x: 378, y: 609 },
    { x: 384, y: 613 },
    { x: 390, y: 618 },
    { x: 394, y: 621 },
    { x: 400, y: 625 },
    { x: 404, y: 628 },
    { x: 408, y: 631 },
    { x: 412, y: 632 },
    { x: 416, y: 635 },
    { x: 420, y: 639 },
    { x: 424, y: 641 },
    { x: 428, y: 643 },
    { x: 432, y: 645 },
    { x: 438, y: 648 },
    { x: 442, y: 651 },
    { x: 445, y: 652 },
    { x: 450, y: 655 },
    { x: 456, y: 658 },
    { x: 462, y: 659 },
    { x: 468, y: 662 },
    { x: 474, y: 665 },
    { x: 479, y: 667 },
    { x: 485, y: 670 },
    { x: 491, y: 671 },
    { x: 496, y: 673 },
    { x: 500, y: 673 },
    { x: 506, y: 674 },
    { x: 513, y: 675 },
    { x: 519, y: 675 },
    { x: 524, y: 675 },
    { x: 531, y: 675 },
    { x: 539, y: 675 },
    { x: 544, y: 675 },
    { x: 550, y: 675 },
    { x: 557, y: 675 },
    { x: 562, y: 675 },
    { x: 568, y: 675 },
    { x: 575, y: 674 },
    { x: 581, y: 672 },
    { x: 589, y: 669 },
    { x: 595, y: 667 },
    { x: 600, y: 666 },
    { x: 606, y: 665 },
    { x: 612, y: 662 },
    { x: 620, y: 658 },
    { x: 628, y: 655 },
    { x: 634, y: 652 },
    { x: 640, y: 649 },
    { x: 644, y: 647 },
    { x: 648, y: 642 },
    { x: 654, y: 638 },
    { x: 658, y: 635 },
    { x: 664, y: 631 },
    { x: 671, y: 626 },
    { x: 673, y: 623 },
    { x: 679, y: 619 },
    { x: 683, y: 615 },
    { x: 689, y: 610 },
    { x: 694, y: 606 },
    { x: 698, y: 603 },
    { x: 704, y: 597 },
    { x: 710, y: 591 },
    { x: 715, y: 584 },
    { x: 719, y: 580 },
    { x: 723, y: 579 },
    { x: 726, y: 575 },
    { x: 728, y: 572 },
    { x: 731, y: 567 },
    { x: 734, y: 564 },
    { x: 736, y: 560 },
    { x: 739, y: 554 },
    { x: 743, y: 546 },
    { x: 746, y: 536 },
    { x: 748, y: 526 },
    { x: 751, y: 515 },
    { x: 753, y: 503 },
    { x: 757, y: 490 },
    { x: 758, y: 480 },
    { x: 760, y: 465 },
    { x: 762, y: 455 },
    { x: 765, y: 443 },
    { x: 767, y: 428 },
    { x: 769, y: 416 },
    { x: 771, y: 403 },
    { x: 771, y: 389 },
    { x: 771, y: 377 },
    { x: 771, y: 367 },
    { x: 771, y: 355 },
    { x: 771, y: 347 },
    { x: 771, y: 338 },
    { x: 771, y: 330 },
    { x: 771, y: 323 },
    { x: 771, y: 315 },
    { x: 771, y: 310 },
    { x: 770, y: 304 },
    { x: 769, y: 299 },
    { x: 769, y: 295 },
    { x: 768, y: 290 },
    { x: 768, y: 288 },
    { x: 766, y: 285 },
    { x: 765, y: 283 },
    { x: 765, y: 280 },
    { x: 764, y: 279 },
    { x: 763, y: 276 },
    { x: 762, y: 275 },
    { x: 761, y: 272 },
    { x: 760, y: 270 },
    { x: 759, y: 269 },
    { x: 758, y: 268 },
    { x: 757, y: 267 },
    { x: 756, y: 266 },
    { x: 753, y: 264 },
    { x: 752, y: 263 },
    { x: 751, y: 261 },
    { x: 750, y: 260 },
    { x: 748, y: 259 },
    { x: 744, y: 258 },
    { x: 740, y: 257 },
    { x: 738, y: 257 },
    { x: 734, y: 255 },
    { x: 733, y: 255 },
    { x: 729, y: 254 },
    { x: 728, y: 254 },
    { x: 726, y: 254 },
    { x: 724, y: 254 },
    { x: 723, y: 254 },
    { x: 720, y: 254 },
    { x: 718, y: 256 },
    { x: 716, y: 257 },
    { x: 713, y: 258 },
    { x: 711, y: 259 },
    { x: 708, y: 262 },
    { x: 707, y: 263 },
    { x: 705, y: 265 },
    { x: 701, y: 268 },
    { x: 700, y: 269 },
    { x: 699, y: 270 },
    { x: 697, y: 272 },
    { x: 696, y: 273 },
    { x: 695, y: 275 },
    { x: 693, y: 278 },
    { x: 692, y: 279 },
    { x: 691, y: 281 },
    { x: 689, y: 284 },
    { x: 688, y: 286 },
    { x: 687, y: 290 },
    { x: 684, y: 293 },
    { x: 683, y: 298 },
    { x: 682, y: 301 },
    { x: 679, y: 305 },
    { x: 676, y: 310 },
    { x: 673, y: 314 },
    { x: 671, y: 319 },
    { x: 669, y: 322 },
    { x: 667, y: 328 },
    { x: 664, y: 332 },
    { x: 661, y: 338 },
    { x: 658, y: 342 },
    { x: 657, y: 348 },
    { x: 654, y: 353 },
    { x: 651, y: 359 },
    { x: 650, y: 365 },
    { x: 645, y: 371 },
    { x: 642, y: 377 },
    { x: 641, y: 383 },
    { x: 638, y: 389 },
    { x: 635, y: 395 },
    { x: 633, y: 402 },
    { x: 630, y: 408 },
    { x: 629, y: 416 },
    { x: 626, y: 422 },
    { x: 624, y: 428 },
    { x: 621, y: 436 },
    { x: 619, y: 441 },
    { x: 616, y: 450 },
    { x: 615, y: 457 },
    { x: 613, y: 465 },
    { x: 610, y: 476 },
    { x: 606, y: 486 },
    { x: 605, y: 491 },
    { x: 603, y: 502 },
    { x: 600, y: 510 },
    { x: 597, y: 518 },
    { x: 597, y: 525 },
    { x: 593, y: 533 },
    { x: 592, y: 541 },
    { x: 590, y: 551 },
    { x: 587, y: 562 },
    { x: 585, y: 572 },
    { x: 582, y: 582 },
    { x: 580, y: 590 },
    { x: 576, y: 600 },
    { x: 575, y: 610 },
    { x: 572, y: 619 },
    { x: 568, y: 627 },
    { x: 565, y: 637 },
    { x: 561, y: 647 },
    { x: 558, y: 653 },
    { x: 557, y: 663 },
    { x: 555, y: 669 },
    { x: 552, y: 677 },
    { x: 551, y: 683 },
    { x: 549, y: 688 },
    { x: 546, y: 696 },
    { x: 544, y: 704 },
    { x: 542, y: 708 },
    { x: 539, y: 714 },
    { x: 536, y: 722 },
    { x: 532, y: 730 },
    { x: 531, y: 734 },
    { x: 527, y: 738 },
    { x: 524, y: 744 },
    { x: 521, y: 748 },
    { x: 520, y: 752 },
    { x: 517, y: 756 },
    { x: 515, y: 759 },
    { x: 512, y: 761 },
    { x: 509, y: 766 },
    { x: 508, y: 767 },
    { x: 507, y: 768 },
    { x: 506, y: 770 },
    { x: 505, y: 771 },
    { x: 504, y: 772 },
    { x: 503, y: 773 },
    { x: 502, y: 773 },
    { x: 500, y: 774 },
    { x: 498, y: 774 },
    { x: 495, y: 775 },
    { x: 491, y: 777 },
    { x: 487, y: 777 },
    { x: 484, y: 777 },
    { x: 480, y: 778 },
    { x: 472, y: 778 },
    { x: 468, y: 779 },
    { x: 463, y: 779 },
    { x: 456, y: 781 },
    { x: 450, y: 782 },
    { x: 443, y: 782 },
    { x: 433, y: 782 },
    { x: 425, y: 784 },
    { x: 415, y: 784 },
    { x: 405, y: 785 },
    { x: 398, y: 785 },
    { x: 390, y: 787 },
    { x: 382, y: 788 },
    { x: 375, y: 788 },
    { x: 369, y: 790 },
    { x: 364, y: 790 },
    { x: 357, y: 790 },
    { x: 349, y: 790 },
    { x: 344, y: 790 },
    { x: 337, y: 790 },
    { x: 329, y: 790 },
    { x: 322, y: 790 },
    { x: 314, y: 790 },
    { x: 309, y: 790 },
    { x: 302, y: 790 },
    { x: 294, y: 790 },
    { x: 289, y: 789 },
    { x: 285, y: 788 },
    { x: 279, y: 787 },
    { x: 277, y: 786 },
    { x: 273, y: 781 },
    { x: 272, y: 780 },
    { x: 269, y: 778 },
    { x: 267, y: 775 },
    { x: 264, y: 773 },
    { x: 263, y: 770 },
    { x: 260, y: 766 },
    { x: 258, y: 762 },
    { x: 258, y: 759 },
    { x: 255, y: 755 },
    { x: 254, y: 751 },
    { x: 251, y: 745 },
    { x: 249, y: 739 },
    { x: 246, y: 733 },
    { x: 244, y: 727 },
    { x: 244, y: 722 },
    { x: 241, y: 718 },
    { x: 239, y: 712 },
    { x: 238, y: 708 },
    { x: 237, y: 705 },
    { x: 237, y: 699 },
    { x: 235, y: 694 },
    { x: 235, y: 691 },
    { x: 235, y: 687 },
    { x: 235, y: 684 },
    { x: 234, y: 681 },
    { x: 234, y: 677 },
    { x: 234, y: 675 },
    { x: 234, y: 671 },
    { x: 234, y: 670 },
    { x: 234, y: 668 },
    { x: 234, y: 666 },
    { x: 235, y: 665 },
    { x: 236, y: 662 },
    { x: 237, y: 661 },
    { x: 239, y: 659 },
    { x: 240, y: 658 },
    { x: 242, y: 656 },
    { x: 244, y: 656 },
    { x: 245, y: 655 },
    { x: 246, y: 655 },
    { x: 247, y: 655 },
    { x: 248, y: 655 },
    { x: 249, y: 655 },
    { x: 250, y: 656 },
    { x: 251, y: 657 },
    { x: 252, y: 658 },
    { x: 253, y: 659 },
    { x: 255, y: 662 },
    { x: 256, y: 663 },
    { x: 256, y: 664 },
    { x: 257, y: 667 },
    { x: 258, y: 669 },
    { x: 258, y: 670 },
    { x: 259, y: 671 },
    { x: 259, y: 672 },
    { x: 259, y: 673 },
    { x: 259, y: 674 },
    { x: 259, y: 676 },
    { x: 259, y: 677 },
    { x: 260, y: 680 },
    { x: 261, y: 682 },
    { x: 261, y: 683 },
    { x: 263, y: 685 },
    { x: 263, y: 686 },
    { x: 264, y: 689 },
    { x: 264, y: 690 },
    { x: 266, y: 693 },
    { x: 266, y: 696 },
    { x: 267, y: 697 },
    { x: 268, y: 698 },
    { x: 268, y: 700 },
    { x: 269, y: 701 },
    { x: 270, y: 703 },
    { x: 271, y: 704 },
    { x: 272, y: 706 },
    { x: 272, y: 707 },
    { x: 275, y: 710 },
    { x: 277, y: 712 },
    { x: 280, y: 715 },
    { x: 282, y: 717 },
    { x: 283, y: 718 },
    { x: 287, y: 722 },
    { x: 290, y: 725 },
    { x: 291, y: 726 },
    { x: 292, y: 727 },
    { x: 294, y: 729 },
    { x: 298, y: 732 },
    { x: 299, y: 733 },
    { x: 301, y: 735 },
    { x: 307, y: 738 },
    { x: 308, y: 739 },
    { x: 312, y: 741 },
    { x: 316, y: 743 },
    { x: 318, y: 744 },
    { x: 320, y: 745 },
    { x: 325, y: 748 },
    { x: 327, y: 749 },
    { x: 329, y: 750 },
    { x: 333, y: 751 },
    { x: 336, y: 753 },
    { x: 338, y: 754 },
    { x: 341, y: 755 },
    { x: 345, y: 756 },
    { x: 347, y: 758 },
    { x: 351, y: 759 },
    { x: 354, y: 760 },
    { x: 355, y: 760 },
    { x: 358, y: 761 },
    { x: 361, y: 763 },
    { x: 365, y: 765 },
    { x: 370, y: 767 },
    { x: 373, y: 768 },
    { x: 378, y: 769 },
    { x: 384, y: 771 },
    { x: 388, y: 773 },
    { x: 392, y: 775 },
    { x: 396, y: 775 },
    { x: 399, y: 776 },
    { x: 405, y: 777 },
    { x: 409, y: 779 },
    { x: 414, y: 780 },
    { x: 418, y: 781 },
    { x: 424, y: 783 },
    { x: 428, y: 784 },
    { x: 433, y: 786 },
    { x: 437, y: 787 },
    { x: 443, y: 788 },
    { x: 445, y: 789 },
    { x: 449, y: 789 },
    { x: 455, y: 791 },
    { x: 457, y: 791 },
    { x: 462, y: 791 },
    { x: 466, y: 792 },
    { x: 470, y: 792 },
    { x: 476, y: 794 },
    { x: 480, y: 794 },
    { x: 487, y: 795 },
    { x: 492, y: 795 },
    { x: 496, y: 796 },
    { x: 502, y: 796 },
    { x: 509, y: 798 },
    { x: 517, y: 799 },
    { x: 522, y: 799 },
    { x: 530, y: 801 },
    { x: 537, y: 801 },
    { x: 545, y: 801 },
    { x: 552, y: 801 },
    { x: 562, y: 801 },
    { x: 567, y: 801 },
    { x: 574, y: 801 },
    { x: 582, y: 801 },
    { x: 589, y: 801 },
    { x: 597, y: 801 },
    { x: 604, y: 801 },
    { x: 609, y: 801 },
    { x: 615, y: 801 },
    { x: 622, y: 801 },
    { x: 627, y: 801 },
    { x: 634, y: 801 },
    { x: 642, y: 801 },
    { x: 646, y: 801 },
    { x: 653, y: 801 },
    { x: 657, y: 801 },
    { x: 661, y: 801 },
    { x: 664, y: 801 },
    { x: 668, y: 801 },
    { x: 672, y: 801 },
    { x: 675, y: 801 },
    { x: 680, y: 801 },
    { x: 682, y: 799 },
    { x: 686, y: 799 },
    { x: 690, y: 798 },
    { x: 694, y: 798 },
    { x: 700, y: 797 },
    { x: 705, y: 795 },
    { x: 709, y: 794 },
    { x: 713, y: 793 },
    { x: 719, y: 791 },
    { x: 721, y: 790 },
    { x: 727, y: 789 },
    { x: 729, y: 787 },
    { x: 735, y: 786 },
    { x: 739, y: 783 },
    { x: 741, y: 782 },
    { x: 745, y: 779 },
    { x: 749, y: 777 },
    { x: 753, y: 774 },
    { x: 756, y: 771 },
    { x: 760, y: 769 },
    { x: 764, y: 766 },
    { x: 768, y: 763 },
    { x: 772, y: 759 },
    { x: 776, y: 755 },
    { x: 779, y: 753 },
    { x: 781, y: 749 },
    { x: 786, y: 744 },
    { x: 788, y: 742 },
    { x: 793, y: 736 },
    { x: 795, y: 733 },
    { x: 800, y: 727 },
    { x: 802, y: 725 },
    { x: 806, y: 721 },
    { x: 809, y: 717 },
    { x: 814, y: 709 },
    { x: 815, y: 708 },
    { x: 818, y: 703 },
    { x: 821, y: 699 },
    { x: 824, y: 695 },
    { x: 827, y: 691 },
    { x: 829, y: 687 },
    { x: 831, y: 681 },
    { x: 832, y: 677 },
    { x: 833, y: 673 },
    { x: 836, y: 669 },
    { x: 837, y: 665 },
    { x: 839, y: 661 },
    { x: 840, y: 659 },
    { x: 843, y: 653 },
    { x: 843, y: 651 },
    { x: 844, y: 647 },
    { x: 845, y: 643 },
    { x: 847, y: 639 },
    { x: 847, y: 635 },
    { x: 848, y: 631 },
    { x: 849, y: 627 },
    { x: 851, y: 623 },
    { x: 852, y: 619 },
    { x: 853, y: 615 },
    { x: 853, y: 611 },
    { x: 855, y: 607 },
    { x: 856, y: 603 },
    { x: 856, y: 600 },
    { x: 857, y: 596 },
    { x: 857, y: 590 },
    { x: 857, y: 586 },
    { x: 858, y: 584 },
    { x: 858, y: 579 },
    { x: 858, y: 575 },
    { x: 858, y: 571 },
    { x: 858, y: 567 },
    { x: 858, y: 563 },
    { x: 858, y: 559 },
    { x: 858, y: 555 },
    { x: 858, y: 550 },
    { x: 858, y: 548 },
    { x: 858, y: 544 },
    { x: 857, y: 540 },
    { x: 855, y: 536 },
    { x: 854, y: 532 },
    { x: 854, y: 528 },
    { x: 852, y: 526 },
    { x: 850, y: 522 },
    { x: 849, y: 518 },
    { x: 848, y: 515 },
    { x: 847, y: 513 },
    { x: 845, y: 510 },
    { x: 844, y: 508 },
    { x: 843, y: 505 },
    { x: 842, y: 504 },
    { x: 841, y: 502 },
    { x: 840, y: 501 },
    { x: 839, y: 500 },
    { x: 838, y: 499 },
    { x: 837, y: 498 },
    { x: 836, y: 497 },
    { x: 835, y: 496 },
    { x: 834, y: 495 },
    { x: 832, y: 494 },
    { x: 831, y: 493 },
    { x: 830, y: 492 },
    { x: 829, y: 492 },
    { x: 827, y: 491 },
    { x: 826, y: 491 },
    { x: 824, y: 490 },
    { x: 823, y: 490 },
    { x: 822, y: 490 },
    { x: 820, y: 490 },
    { x: 819, y: 490 },
    { x: 816, y: 490 },
    { x: 815, y: 490 },
    { x: 813, y: 490 },
    { x: 811, y: 490 },
    { x: 810, y: 490 },
    { x: 809, y: 490 },
    { x: 805, y: 490 },
    { x: 804, y: 490 },
    { x: 802, y: 490 },
    { x: 800, y: 490 },
    { x: 799, y: 490 },
    { x: 798, y: 490 },
    { x: 796, y: 491 },
    { x: 795, y: 491 },
    { x: 792, y: 492 },
    { x: 791, y: 492 },
    { x: 789, y: 493 },
    { x: 788, y: 493 },
    { x: 787, y: 493 },
    { x: 786, y: 494 },
    { x: 785, y: 494 },
    { x: 784, y: 495 },
    { x: 783, y: 496 },
    { x: 782, y: 496 },
    { x: 781, y: 497 },
    { x: 780, y: 498 },
    { x: 779, y: 499 },
    { x: 778, y: 500 },
    { x: 777, y: 500 },
    { x: 777, y: 498 },
    { x: 777, y: 496 },
    { x: 777, y: 493 },
    { x: 778, y: 491 },
    { x: 779, y: 490 },
    { x: 782, y: 486 },
    { x: 783, y: 484 },
    { x: 786, y: 481 },
    { x: 788, y: 479 },
    { x: 792, y: 476 },
    { x: 795, y: 475 },
    { x: 799, y: 472 },
    { x: 804, y: 469 },
    { x: 817, y: 464 },
    { x: 830, y: 458 },
    { x: 843, y: 453 },
    { x: 863, y: 445 },
    { x: 885, y: 435 },
    { x: 907, y: 427 },
    { x: 929, y: 416 },
    { x: 961, y: 410 },
    { x: 991, y: 401 },
    { x: 1020, y: 391 },
    { x: 1049, y: 385 },
    { x: 1084, y: 375 },
  ],
};

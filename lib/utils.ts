import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#C0C0C0", // Silver
  "#808080", // Gray
  "#800000", // Maroon
  "#008000", // Olive
  "#000080", // Navy
  "#800080", // Purple
  "#808000", // Olive
  "#008080", // Teal
  "#800080", // Purple
  "#008000", // Green
  "#FFA500", // Orange
  "#A52A2A", // Brown
  "#800000", // Maroon
  "#FF00FF", // Fuchsia
  "#FF4500", // OrangeRed
  "#FFD700", // Gold
  "#ADFF2F", // GreenYellow
  "#FF1493", // DeepPink
  "#FF6347", // Tomato
  "#FF69B4", // HotPink
  "#D2691E", // Chocolate
  "#8A2BE2", // BlueViolet
  "#20B2AA", // LightSeaGreen
  "#00FF7F", // SpringGreen
  "#7FFF00", // Chartreuse
  "#4682B4", // SteelBlue
  "#6495ED", // CornflowerBlue
  "#00CED1", // DarkTurquoise
  "#48D1CC", // MediumTurquoise
  "#AFEEEE", // PaleTurquoise
  "#7FFFD4", // Aquamarine
  "#40E0D0", // Turquoise
  "#00FA9A", // MediumSpringGreen
  "#7CFC00", // LawnGreen
  "#00FF00", // Lime
  "#32CD32", // LimeGreen
  "#ADFF2F", // GreenYellow
  "#8FBC8F", // DarkSeaGreen
  "#98FB98", // PaleGreen
  "#556B2F", // DarkOliveGreen
  "#9ACD32", // YellowGreen
  "#6B8E23", // OliveDrab
  "#F0E68C", // Khaki
  "#FFD700", // Gold
  "#DAA520", // GoldenRod
  "#B8860B", // DarkGoldenRod
  "#FFA07A", // LightSalmon
  "#FA8072", // Salmon
  "#E9967A", // DarkSalmon
  "#F08080", // LightCoral
  "#CD5C5C", // IndianRed
  "#DC143C", // Crimson
  "#FF0000", // Red
  "#B22222", // FireBrick
  "#8B0000", // DarkRed
  "#FF4500", // OrangeRed
  "#FF6347", // Tomato
  "#FF7F50", // Coral
  "#FFA07A", // LightSalmon
  "#FFDAB9", // PeachPuff

  "#FFDEAD", // NavajoWhite
  "#F5DEB3", // Wheat
  "#DEB887", // BurlyWood
  "#D2B48C", // Tan
  "#BC8F8F", // RosyBrown
  "#F4A460", // SandyBrown
  "#A52A2A", // Brown
  "#CD853F", // Peru
  "#8B4513", // SaddleBrow
  "#696969", // DimGrey
  "#778899", // LightSlateGrey
  "#708090", // SlateGrey
  "#2F4F4F", // DarkSlateGrey
  "#000000"  // Black
];
 


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function connectionIdToColor(connectionId:number):string{
  return COLORS[connectionId % COLORS.length];
}


export function pointerEventToCanvasPoint(
  e:React.PointerEvent,
  camera:Camera
){
  return {
    x:Math.round(e.clientX) - camera.x,
    y:Math.round(e.clientY) - camera.y
  }
}
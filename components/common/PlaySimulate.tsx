'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PlaySimulate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const manRef = useRef<HTMLDivElement>(null);
  const harpoonRopeRef = useRef<HTMLDivElement>(null);
  const harpoonHeadRef = useRef<HTMLDivElement>(null);
  const fishRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState('79.28vw');
  const [clickedFish, setClickedFish] = useState<string | null>(null); // 记录当前点击的鱼
  const [hoveredFish, setHoveredFish] = useState<string | null>(null);
  const frameTextFontFamily = '"TASA Explorer", sans-serif';

  const originalHeight = 75; // vw - 从第一个元素 top 到最后一个元素 bottom 的高度

  // 原始容器基准位置（用于计算相对位置）
  //const originalContainerTop = 450; // vw - 原始容器 top
  
  // 组件在容器内的相对位置（基于原始容器 top = 450vw 计算）
  // 这些相对位置保持不变，不随容器 top 改变
  const relativePositions = {
    clownfish: { top: 20, left: -30, rotation: 20 }, // 可修改此数值：top(垂直位置), left(水平偏移), rotation(旋转角度，单位：度)
    angler: { top: 20, left: 30, rotation: 0 }, // 可修改此数值
    swordfish: { top: 0, left: 10, rotation: -10}, // 可修改此数值
    moonfish: { top: 37, left: 20, rotation: 10}, // 可修改此数值
    whaleshark: { top: 55, left: 15, rotation: -10 }, // 可修改此数值
    // ========== 人的位置调整 ==========
    // 可修改此数值：top(垂直位置vw), left(水平偏移vw), rotation(旋转角度，单位：度)
    man: { top: 20, left: -15, rotation: 0 }, // 调整人的位置：top(上移/下移), left(左移/右移), rotation(旋转角度) - 鱼叉起点位置
    // ====================================
    // 背景鱼（远处，带模糊效果，无交互）
    flyingfish: { top: -5, left: -10, rotation: 15 }, // 可修改此数值
    ribbonfish: { top: 0, left: 35, rotation: -10 }, // 可修改此数值
    tuna: { top: 55, left: -30, rotation: 15 }, // 可修改此数值
    octopus: { top: 30, left: 0, rotation: 0 }, // 可修改此数值
    sardine: { top:0, left: -40, rotation: -5 }, // 可修改此数值
    ray: { top: 47, left: 45, rotation: -15 }, // 可修改此数值
  };

  const setFishRef = (fishKey: keyof typeof relativePositions) => (node: HTMLDivElement | null) => {
    fishRefs.current[fishKey] = node;
  };

  // 背景鱼模糊值配置（可修改）- 每条鱼可以设置不同的模糊值
  const backgroundFishBlur = {
    flyingfish: '0.8px', // 可修改此数值
    ribbonfish: '1.3px', // 可修改此数值
    tuna: '1.2px', // 可修改此数值
    octopus: '1.5px', // 可修改此数值
    sardine: '1.1px', // 可修改此数值
    ray: '1px', // 可修改此数值
  };

  // frameFlyingFish 和 frameDialog 相对于每条鱼的偏移配置（可修改）
  const frameDialogGapPx = 0; // vertical gap between frameFlyingFish and frameDialog (px)
  const frameOffsets = {
    clownfish: { 
      frameFlyingFish: { top:-3, left: -2, width: 15, height: 11 }, // 相对于鱼的偏移：top(垂直偏移), left(水平偏移), width(宽度vw), height(高度vw)
      frameDialog: { width: 22.22, height: 10.97 } // size only; top/left derived from frameFlyingFish
    },
    angler: { 
      frameFlyingFish: { top: -2, left: -1, width: 15, height: 13 },
      frameDialog: { width: 22.22, height: 10.97 }
    },
    swordfish: { 
      frameFlyingFish: { top: 2, left: 0, width: 30, height: 18 },
      frameDialog: { width: 22.22, height: 10.97 }
    },
    moonfish: { 
      frameFlyingFish: { top: -3, left: -2, width: 20, height: 16 },
      frameDialog: { width: 22.22, height: 10.97 }
    },
    whaleshark: { 
      frameFlyingFish: { top: -3.5, left: -3, width: 35, height: 16 },
      frameDialog: { width: 22.22, height: 10.97 }
    },
  };

  const isFrameFish = (key: string | null): key is keyof typeof frameOffsets =>
    Boolean(key && key in frameOffsets);

  // 鱼的数据配置（可修改）
  const fishData = {
    clownfish: {
      name: 'Clownfish',
      weight: '6kg',
      value: '18',
      valueType: 'gold', // 'gold' 或 'diamond'
      description: 'Living in the warm, shallow sea with a beautiful appearance.',
    },
    angler: {
      name: 'Angler',
      weight: '40kg',
      value: '220',
      valueType: 'gold',
      description: 'A glowing fishing rod hangs above its head, guarding treasure chests among the reefs.',
    },
    swordfish: {
      name: 'Swordfish',
      weight: '80kg',
      value: '4',
      valueType: 'diamond',
      description: 'An extremely rare fish that radiates a rainbow-colored glow from its body.',
    },
    moonfish: {
      name: 'Moonfish',
      weight: '180kg',
      value: '960',
      valueType: 'gold',
      description: 'Living in the mesopelagic zone, it can fetch a good price.',
    },
    whaleshark: {
      name: 'Whaleshark',
      weight: '350kg',
      value: '3000',
      valueType: 'gold',
      description: 'Lurking in the deepest parts of the ocean, it has a massive size and terrifying aggression.',
    },
  };

  // 辅助函数：根据 flip 值生成 scale transform
  const getFlipTransform = (flip: string) => {
    switch (flip) {
      case 'horizontal':
        return 'scaleX(-1)';
      case 'vertical':
        return 'scaleY(-1)';
      case 'both':
        return 'scale(-1)';
      default:
        return '';
    }
  };

  // 鱼的游动动画配置（可修改）
  // distance: 游动距离（vw），duration: 动画时长（秒），animationProgress: 初始动画进度（0-1之间，0=开始，0.5=中间，1=结束）
  // 移动方向根据鱼的 rotation 角度自动计算
  // 体积越大的鱼，移动速度越慢（duration 越长）
  // 体积排序（从大到小）：swordfish > whaleshark > moonfish > angler > clownfish
  const fishSwimConfig = {
    // 前景鱼（可交互）
    clownfish: { distance: 8, duration: 10, animationProgress: 0 }, // 体积最小，速度最快
    angler: { distance: 9, duration: 7, animationProgress: 0.2 }, // 体积较小
    moonfish: { distance: 10, duration: 12, animationProgress: 0.1 }, // 体积中等
    whaleshark: { distance: 11, duration: 16, animationProgress: 0.3 }, // 体积较大
    swordfish: { distance: 14, duration:8, animationProgress: 0.4 }, // 体积最大，速度最慢
    // 背景鱼（无交互，带模糊效果）
    flyingfish: { distance: 10, duration: 24, animationProgress: 0 }, // 背景鱼游动配置
    ribbonfish: { distance: 8, duration: 28, animationProgress: 0.2 },
    tuna: { distance: 9, duration: 22, animationProgress: 0.4 },
    octopus: { distance: 6, duration: 30, animationProgress: 0.1 },
    sardine: { distance: 8, duration: 25, animationProgress: 0.3 },
    ray: { distance: 7, duration: 20, animationProgress: 0 },
  };

  // 获取鱼的游动动画样式（根据鱼的 rotation 角度计算移动方向）
  const getFishSwimStyle = (fishKey: keyof typeof fishSwimConfig) => {
    const config = fishSwimConfig[fishKey];
    if (!config) {
      return {};
    }
    
    // 获取鱼的初始旋转角度和动画进度
    const fishPosition = relativePositions[fishKey];
    const rotation = fishPosition?.rotation || 0;
    const animationProgress = config.animationProgress || 0; // 0-1之间，从 fishSwimConfig 中读取
    
    // 将角度转换为弧度
    const angleRad = (rotation * Math.PI) / 180;
    
    // 计算移动方向（根据角度计算水平和垂直分量）
    // 向左游：沿角度方向移动
    const distanceX = config.distance * Math.cos(angleRad);
    const distanceY = config.distance * Math.sin(angleRad);
    
    const distanceXvw = `${distanceX * scale}vw`;
    const distanceYvw = `${distanceY * scale}vw`;
    
    // 根据动画进度计算初始延迟（负数表示从中间开始）
    // animationProgress = 0 时，delay = 0（从开始）
    // animationProgress = 0.5 时，delay = -duration/2（从中间）
    // animationProgress = 1 时，delay = -duration（从结束，相当于重新开始）
    const initialDelay = -(config.duration * animationProgress);
    
    // 根据动画进度设置初始 --swim-flip 值
    // 0-50%: --swim-flip = 1 (不翻转，向左游)
    // 50%-100%: --swim-flip = -1 (翻转，向右游)
    const initialFlipValue = animationProgress < 0.5 ? '1' : '-1';
    
    // 构建动画样式，始终包含动画定义
    // 使用 animationName, animationDuration, animationTimingFunction, animationIterationCount 替代 animation 简写
    // 这样可以避免与 animationPlayState 冲突
    const style: React.CSSProperties & Record<string, string> = {
      animationName: 'fish-swim-directional',
      animationDuration: `${config.duration}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDelay: `${initialDelay}s`,
      '--swim-distance-x': distanceXvw,
      '--swim-distance-y': distanceYvw,
      '--swim-flip': initialFlipValue, // 根据动画进度设置初始值
    };
    
    // 如果鱼被选中，暂停动画但保持当前位置
    // 使用 animation-play-state: paused 而不是 animation: none
    // 这样鱼会暂停在当前位置，而不是回到初始位置
    if (clickedFish === fishKey) {
      style.animationPlayState = 'paused';
    }
    
    return style;
  };

  // 获取鱼的翻转样式（根据动画进度动态翻转）
  const getFishFlipStyle = (fishKey: keyof typeof relativePositions) => {
    // 从 fishSwimConfig 中获取 animationProgress
    const config = fishSwimConfig[fishKey as keyof typeof fishSwimConfig];
    const animationProgress = config?.animationProgress || 0; // 0-1之间
    
    // 根据动画进度确定初始 flip 状态
    // animationProgress < 0.5: 向左游，不翻转
    // animationProgress >= 0.5: 向右游，翻转
    const initialFlip = animationProgress < 0.5 ? 'none' : 'horizontal';
    
    // 使用 CSS 变量 --swim-flip 来控制翻转
    // 向左游时 --swim-flip = 1 (不翻转)，向右游时 --swim-flip = -1 (翻转)
    if (initialFlip === 'horizontal') {
      return `scaleX(calc(var(--swim-flip, 1) * -1))`;
    } else {
      return `scaleX(var(--swim-flip, 1))`;
    }
  };

  const getFishZIndex = (fishKey: keyof typeof fishSwimConfig) => {
    return 3;
  };

  useEffect(() => {
    if (!clickedFish || clickedFish === 'man' || !isFrameFish(clickedFish)) {
      if (harpoonRopeRef.current) {
        harpoonRopeRef.current.style.opacity = '0';
      }
      if (harpoonHeadRef.current) {
        harpoonHeadRef.current.style.opacity = '0';
      }
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    const extendDurationMs = 220;
    const updateRope = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const container = innerContainerRef.current;
      const manEl = manRef.current;
      const fishEl = fishRefs.current[clickedFish];
      const ropeEl = harpoonRopeRef.current;
      const headEl = harpoonHeadRef.current;
      if (!container || !manEl || !fishEl || !ropeEl || !headEl) {
        frameId = requestAnimationFrame(updateRope);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const manRect = manEl.getBoundingClientRect();
      const fishRect = fishEl.getBoundingClientRect();
      // 从人的中心稍微往左一点发射（中心是 width/2，这里用 width * 0.4 稍微靠左）
      const manX = manRect.left - containerRect.left + manRect.width * 0.4;
      const manY = manRect.top - containerRect.top + manRect.height / 2;
      const fishX = fishRect.left - containerRect.left + fishRect.width / 2;
      const fishY = fishRect.top - containerRect.top + fishRect.height / 2;
      const deltaX = fishX - manX;
      const deltaY = fishY - manY;
      const distance = Math.hypot(deltaX, deltaY);
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const progress = Math.min(1, (timestamp - startTime) / extendDurationMs);
      const currentFishX = manX + deltaX * progress;
      const currentFishY = manY + deltaY * progress;
      const currentDistance = distance * progress;

      ropeEl.style.left = `${manX}px`;
      ropeEl.style.top = `${manY}px`;
      ropeEl.style.height = `${currentDistance}px`;
      ropeEl.style.transform = `translateX(-50%) rotate(${angle - 90}deg)`;
      ropeEl.style.opacity = '1';

      headEl.style.left = `${currentFishX}px`;
      headEl.style.top = `${currentFishY}px`;
      headEl.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      headEl.style.opacity = '1';

      frameId = requestAnimationFrame(updateRope);
    };

    frameId = requestAnimationFrame(updateRope);
    return () => {
      cancelAnimationFrame(frameId);
      if (harpoonRopeRef.current) {
        harpoonRopeRef.current.style.opacity = '0';
      }
      if (harpoonHeadRef.current) {
        harpoonHeadRef.current.style.opacity = '0';
      }
    };
  }, [clickedFish, scale]);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      // 获取视口尺寸
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 将 vw 转换为像素
      const originalHeightPx = (originalHeight / 100) * viewportWidth;
      const maxHeightPx = (70 / 100) * viewportHeight; 

      // 计算缩放比例
      let newScale = 1;

      if (originalHeightPx > maxHeightPx) {
        newScale = maxHeightPx / originalHeightPx;
      }

      // 计算新的高度（vw）
      const newHeightVw = originalHeight * newScale;

      setScale(newScale);
      setContainerHeight(`${newHeightVw}vw`);
    };

    updateScale();
    
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // 原始尺寸（用于计算缩放后的尺寸）- 基于实际图片尺寸（1440px 设计宽度）
  const originalSizes = {
    clownfish: { width: 10.1722, height: 6.2056 }, // 1831px × 1117px (0.08倍: 127.1528 * 0.08)
    angler: { width: 12.9583, height: 8.9375 }, // 1866px × 1287px (0.1倍: 129.5833 * 0.1)
    swordfish: { width: 29.1951, height: 21.3444 }, // 2473px × 1808px (0.17倍: 171.7361 * 0.17)
    moonfish: { width: 15.6125, height: 13.4625 }, // 1249px × 1077px (0.18倍: 86.7361 * 0.18)
    whaleshark: { width: 28.3021, height: 10.2500 }, // 2717px × 984px (0.15倍: 188.6806 * 0.15)
    // ========== 人的大小调整 ==========
    // 可修改此数值：width(宽度vw), height(高度vw)
    man: { width: 34.1668, height: 42.2916 }, // 👈 调整人的大小：width(宽度), height(高度)，单位：vw
    // ====================================
    // 背景鱼尺寸（可修改）- 远处背景鱼，尺寸较小
    flyingfish: { width: 6.6389, height: 3.7500 }, // 2390px × 1350px (0.04倍: 166.0 * 0.04)
    ribbonfish: { width: 7.0083, height: 0.9389 }, // 2523px × 338px (0.04倍: 175.2 * 0.04)
    tuna: { width: 7.0313, height: 2.7083 }, // 2025px × 780px (0.05倍: 140.6 * 0.05)
    octopus: { width: 4.9354, height: 1.6000 }, // 2369px × 768px (0.03倍: 164.5 * 0.03)
    sardine: { width: 4.9354, height: 1.7750 }, // 2369px × 852px (0.03倍: 164.5 * 0.03)
    ray: { width: 7.5833, height: 4.4208 }, // 1820px × 1061px (0.06倍: 126.4 * 0.06)
  };

  const renderFrameFlyingFish = (fishKey: keyof typeof frameOffsets) => {
    const offset = frameOffsets[fishKey];
    const data = fishData[fishKey];
    if (!offset || !data) return null;

    const frameWidth = offset.frameFlyingFish.width;
    const frameHeight = offset.frameFlyingFish.height;
    // 左边距：框越宽，左边距越大（基于宽度计算）
    // 宽度15时左边距约1.2vw，宽度30时左边距约2.4vw
    const leftPadding = Math.min(frameWidth * 0.08, 2.5); // 宽度越大，左边距越大，最大2.5vw
    // 上边距：框越高，上边距越大（基于高度计算，但幅度较小）
    // 高度10时上边距约0.6vw，高度18时上边距约1.08vw
    const topPadding = Math.min(frameHeight * 0.06, 1.2); // 高度越大，上边距越大，最大1.2vw（幅度比左右边距小）
    const nameFontSize = Math.min(frameWidth * 0.1, frameHeight * 0.12, 1.6);
    const weightFontSize = Math.min(frameWidth * 0.085, frameHeight * 0.1, 1.3);

    return (
      <>
        {/* frameFlyingFish - 在鱼的动画容器内，完全跟随鱼的移动 */}
        <div
        className="absolute transition-opacity duration-300"
        style={{
          left: `${offset.frameFlyingFish.left * scale}vw`, // 相对于鱼的动画容器定位
          top: `${offset.frameFlyingFish.top * scale}vw`, // 相对于鱼的动画容器定位
          width: `${offset.frameFlyingFish.width * scale}vw`, // 宽度（根据配置和缩放比例）
          height: `${offset.frameFlyingFish.height * scale}vw`, // 高度（根据配置和缩放比例）
          zIndex: 5, // 层级5，在鱼图层之上
          pointerEvents: 'none', // 不阻挡下层点击
          transformOrigin: 'center center', // 变换中心点
          opacity: 1,
          overflow: 'hidden', // 隐藏溢出内容
        }}
      >
        {/* frame-flying-fish.svg 选中框 */}
        <img
          src="/XDiver/frame-flying-fish.svg"
          alt="Frame Flying Fish"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill', // 填充整个容器，不保持宽高比
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1, // 背景层
          }}
        />
        {/* 鱼类名称 - 显示在左上角 */}
        <div
          className="absolute"
          style={{
            top: `${topPadding * scale}vw`, // 上边距（动态计算，框越高边距越大）
            left: `${leftPadding * scale}vw`, // 使用左边距，框越宽左边距越大
            fontSize: `${nameFontSize * scale}vw`, // 字体大小（根据框的尺寸动态计算）
            fontWeight: 700, // 粗体
            fontFamily: frameTextFontFamily,
            zIndex: 7, // 文本层，在背景框之上
            pointerEvents: 'none',
            maxWidth: `calc(100% - ${(leftPadding + topPadding) * scale}vw)`, // 右边距使用topPadding
            overflow: 'hidden', // 隐藏溢出文本
            textOverflow: 'ellipsis', // 超出部分显示省略号
            whiteSpace: 'nowrap', // 不换行
          }}
        >
          {data.name}
        </div>
        {/* 鱼类重量 - 显示在左下角 */}
        <div
          className="absolute"
          style={{
            bottom: `${topPadding * scale}vw`, // 下边距（与上边距相同）
            left: `${leftPadding * scale}vw`, // 使用左边距，框越宽左边距越大
            fontSize: `${weightFontSize * scale}vw`, // 字体大小（根据框的尺寸动态计算）
            fontWeight: 500, // 中等粗细
            fontFamily: frameTextFontFamily,
            zIndex: 7, // 文本层，在背景框之上
            pointerEvents: 'none',
            maxWidth: `calc(100% - ${(leftPadding + topPadding) * scale}vw)`, // 最大宽度（考虑左右边距）
            overflow: 'hidden', // 隐藏溢出文本
            textOverflow: 'ellipsis', // 超出部分显示省略号
            whiteSpace: 'nowrap', // 不换行
          }}
        >
          {data.weight}
        </div>
      </div>
      </>
    );
  };

  // 渲染鱼叉（从人位置发射到鱼位置）
  const HarpoonRope = ({ ropeWidth, ropeRef }: {
    ropeWidth: number;
    ropeRef: { current: HTMLDivElement | null };
  }) => {
    return (
      <div
        ref={ropeRef}
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: `${ropeWidth}vw`,
          height: 0,
          transformOrigin: 'top center',
          transform: 'translateX(-50%)',
          zIndex: 12,
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <Image
          src="/XDiver/HarpoonRope.png"
          alt="Harpoon Rope"
          width={100} // 占位值，实际尺寸根据图片调整
          height={1000} // 占位值，实际尺寸根据图片调整
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill', // 填充整个容器
            display: 'block',
          }}
        />
      </div>
    );
  };

  const HarpoonHead = ({ headWidth, headHeight, headRef }: {
    headWidth: number;
    headHeight: number;
    headRef: { current: HTMLDivElement | null };
  }) => {
    return (
      <div
        ref={headRef}
        className="absolute"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          width: `${headWidth}vw`,
          height: `${headHeight}vw`,
          zIndex: 13,
          pointerEvents: 'none',
          transformOrigin: 'center center',
          opacity: 0,
        }}
      >
        <Image
          src="/XDiver/HarpoonHead.png"
          alt="Harpoon Head"
          width={100}
          height={100}
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    );
  };

  const renderFrameDialog = (fishKey: keyof typeof frameOffsets) => {
    const offset = frameOffsets[fishKey];
    const data = fishData[fishKey];
    if (!offset || !data) return null;
    const dialogMinHeight = `${offset.frameDialog.height * scale}vw`;

    const frameWidth = offset.frameFlyingFish.width;
    const leftOffset = -((25 - frameWidth) * 0.04);
    const dialogLeft = offset.frameFlyingFish.left + leftOffset;

    return (
      <div
        className="absolute transition-opacity duration-300"
        style={{
          left: `${dialogLeft * scale}vw`,
          top: `${(offset.frameFlyingFish.top - frameDialogGapPx / scale) * scale}vw`,
          width: `${offset.frameDialog.width * scale}vw`,
          minHeight: dialogMinHeight,
          zIndex: 7,
          pointerEvents: 'none',
          transform: 'translateY(-100%)',
          transformOrigin: 'top left',
          opacity: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: dialogMinHeight,
          }}
        >
          <img
            src="/XDiver/frameDialog.svg"
            alt="Frame Dialog"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'relative',
              paddingTop: '10%',
              paddingBottom: `${0.9 * scale}vw`,
              paddingLeft: '10%',
              paddingRight: '30%',
              fontSize: `${1.1 * scale}vw`,
              fontWeight: 400,
              fontFamily: frameTextFontFamily,
              lineHeight: 1.5,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            {data.description}
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: `${0.4 * scale}vw`,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <Image
              src={data.valueType === 'diamond' ? '/XDiver/Diamond.png' : '/XDiver/Gold.png'}
              alt={data.valueType === 'diamond' ? 'Diamond' : 'Gold'}
              width={28}
              height={28}
              style={{
                width: `${3.6 * scale}vw`,
                height: `${3.6 * scale}vw`,
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              style={{
                fontSize: `${1.5 * scale}vw`,
                fontWeight: 700,
                fontFamily: frameTextFontFamily,
              }}
            >
              {data.value}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="xdiver"
      ref={containerRef}
      className="relative w-full"
      style={{
        height: containerHeight,
        zIndex: 5,
      }}
    >
      <div
        ref={innerContainerRef}
        className="relative"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        onClick={(e) => {
          if (e.target === innerContainerRef.current) {
            setClickedFish(null);
          }
        }}
      >
        <div
          ref={setFishRef('clownfish')}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.clownfish.left * scale}vw)`,
            top: `${relativePositions.clownfish.top * scale}vw`,
            width: `${originalSizes.clownfish.width * scale}vw`,
            height: `${originalSizes.clownfish.height * scale}vw`,
            zIndex: 3,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            ...getFishSwimStyle('clownfish'),
          }}
        >
          <div
            className="cursor-pointer w-full h-full"
            style={{
              transform: `rotate(${relativePositions.clownfish.rotation}deg) ${getFishFlipStyle('clownfish')}`,
              transformOrigin: 'center center',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setClickedFish(clickedFish === 'clownfish' ? null : 'clownfish');
            }}
            onMouseEnter={() => setHoveredFish('clownfish')}
            onMouseLeave={() =>
              setHoveredFish((current) => (current === 'clownfish' ? null : current))
            }
          >
            <Image
              src="/XDiver/Clownfish.png"
              alt="Clownfish"
              width={1831}
              height={1117}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          {clickedFish === 'clownfish' && renderFrameFlyingFish('clownfish')}
          {hoveredFish === 'clownfish' && hoveredFish !== clickedFish && renderFrameFlyingFish('clownfish')}
          {clickedFish === 'clownfish' && renderFrameDialog('clownfish')}
          
        </div>

        <div
          ref={setFishRef('angler')}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.angler.left * scale}vw)`,
            top: `${relativePositions.angler.top * scale}vw`,
            width: `${originalSizes.angler.width * scale}vw`,
            height: `${originalSizes.angler.height * scale}vw`,
            zIndex: getFishZIndex('clownfish'),
            pointerEvents: 'none',
            transformOrigin: 'center center',
            ...getFishSwimStyle('angler'),
          }}
        >
          <div
            className="cursor-pointer w-full h-full"
            style={{
              transform: `rotate(${relativePositions.angler.rotation}deg) ${getFishFlipStyle('angler')}`,
              transformOrigin: 'center center',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setClickedFish(clickedFish === 'angler' ? null : 'angler');
            }}
            onMouseEnter={() => setHoveredFish('angler')}
            onMouseLeave={() =>
              setHoveredFish((current) => (current === 'angler' ? null : current))
            }
          >
            <Image
              src="/XDiver/Angler.png"
              alt="Angler"
              width={1866}
              height={1287}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          {clickedFish === 'angler' && renderFrameFlyingFish('angler')}
          {hoveredFish === 'angler' && hoveredFish !== clickedFish && renderFrameFlyingFish('angler')}
          {clickedFish === 'angler' && renderFrameDialog('angler')}
          
        </div>

        <div
          ref={setFishRef('swordfish')}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.swordfish.left * scale}vw)`,
            top: `${relativePositions.swordfish.top * scale}vw`,
            width: `${originalSizes.swordfish.width * scale}vw`,
            height: `${originalSizes.swordfish.height * scale}vw`,
            zIndex: getFishZIndex('angler'),
            pointerEvents: 'none',
            transformOrigin: 'center center',
            ...getFishSwimStyle('swordfish'),
          }}
        >
          <div
            className="cursor-pointer w-full h-full"
            style={{
              transform: `rotate(${relativePositions.swordfish.rotation}deg) ${getFishFlipStyle('swordfish')}`,
              transformOrigin: 'center center',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setClickedFish(clickedFish === 'swordfish' ? null : 'swordfish');
            }}
            onMouseEnter={() => setHoveredFish('swordfish')}
            onMouseLeave={() =>
              setHoveredFish((current) => (current === 'swordfish' ? null : current))
            }
          >
            <Image
              src="/XDiver/Swordfish.png"
              alt="Swordfish"
              width={2473}
              height={1808}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          {clickedFish === 'swordfish' && renderFrameFlyingFish('swordfish')}
          {hoveredFish === 'swordfish' && hoveredFish !== clickedFish && renderFrameFlyingFish('swordfish')}
          {clickedFish === 'swordfish' && renderFrameDialog('swordfish')}
          
        </div>

        <div
          ref={setFishRef('moonfish')}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.moonfish.left * scale}vw)`,
            top: `${relativePositions.moonfish.top * scale}vw`,
            width: `${originalSizes.moonfish.width * scale}vw`,
            height: `${originalSizes.moonfish.height * scale}vw`,
            zIndex: getFishZIndex('swordfish'),
            pointerEvents: 'none',
            transformOrigin: 'center center',
            ...getFishSwimStyle('moonfish'),
          }}
        >
          <div
            className="cursor-pointer w-full h-full"
            style={{
              transform: `rotate(${relativePositions.moonfish.rotation}deg) ${getFishFlipStyle('moonfish')}`,
              transformOrigin: 'center center',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setClickedFish(clickedFish === 'moonfish' ? null : 'moonfish');
            }}
            onMouseEnter={() => setHoveredFish('moonfish')}
            onMouseLeave={() =>
              setHoveredFish((current) => (current === 'moonfish' ? null : current))
            }
          >
            <Image
              src="/XDiver/Moonfish.png"
              alt="Moonfish"
              width={1249}
              height={1077}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          {clickedFish === 'moonfish' && renderFrameFlyingFish('moonfish')}
          {hoveredFish === 'moonfish' && hoveredFish !== clickedFish && renderFrameFlyingFish('moonfish')}
          {clickedFish === 'moonfish' && renderFrameDialog('moonfish')}
          
        </div>

        <div
          ref={setFishRef('whaleshark')}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.whaleshark.left * scale}vw)`,
            top: `${relativePositions.whaleshark.top * scale}vw`,
            width: `${originalSizes.whaleshark.width * scale}vw`,
            height: `${originalSizes.whaleshark.height * scale}vw`,
            zIndex: getFishZIndex('moonfish'),
            pointerEvents: 'none',
            transformOrigin: 'center center',
            ...getFishSwimStyle('whaleshark'),
          }}
        >
          <div
            className="cursor-pointer w-full h-full"
            style={{
              transform: `rotate(${relativePositions.whaleshark.rotation}deg) ${getFishFlipStyle('whaleshark')}`,
              transformOrigin: 'center center',
              pointerEvents: 'auto',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setClickedFish(clickedFish === 'whaleshark' ? null : 'whaleshark');
            }}
            onMouseEnter={() => setHoveredFish('whaleshark')}
            onMouseLeave={() =>
              setHoveredFish((current) => (current === 'whaleshark' ? null : current))
            }
          >
            <Image
              src="/XDiver/Whaleshark.png"
              alt="Whaleshark"
              width={2717}
              height={984}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          {clickedFish === 'whaleshark' && renderFrameFlyingFish('whaleshark')}
          {hoveredFish === 'whaleshark' && hoveredFish !== clickedFish && renderFrameFlyingFish('whaleshark')}
          {clickedFish === 'whaleshark' && renderFrameDialog('whaleshark')}
          
        </div>

        <div
          ref={manRef}
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.man.left * scale}vw) rotate(${relativePositions.man.rotation}deg) ${getFlipTransform('none')}`,
            top: `${relativePositions.man.top * scale}vw`,
            width: `${originalSizes.man.width * scale}vw`,
            height: `${originalSizes.man.height * scale}vw`,
            zIndex: 14,
            pointerEvents: 'none',
            transformOrigin: 'center center',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              console.error('Video load error:', e);
            }}
            onLoadedData={() => {
              console.log('Video loaded successfully');
            }}
          >
            <source src="/XDiver/framesmooth_loop_12fps.webm" type="video/webm" />
          </video>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.flyingfish.left * scale}vw)`,
            top: `${relativePositions.flyingfish.top * scale}vw`,
            width: `${originalSizes.flyingfish.width * scale}vw`,
            height: `${originalSizes.flyingfish.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.flyingfish})`,
            ...getFishSwimStyle('flyingfish'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.flyingfish.rotation}deg) ${getFishFlipStyle('flyingfish')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Flyingfish.png"
              alt="Flyingfish"
              width={2390}
              height={1350}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.ribbonfish.left * scale}vw)`,
            top: `${relativePositions.ribbonfish.top * scale}vw`,
            width: `${originalSizes.ribbonfish.width * scale}vw`,
            height: `${originalSizes.ribbonfish.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.ribbonfish})`,
            ...getFishSwimStyle('ribbonfish'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.ribbonfish.rotation}deg) ${getFishFlipStyle('ribbonfish')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Ribbonfish.png"
              alt="Ribbonfish"
              width={2523}
              height={338}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.tuna.left * scale}vw)`,
            top: `${relativePositions.tuna.top * scale}vw`,
            width: `${originalSizes.tuna.width * scale}vw`,
            height: `${originalSizes.tuna.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.tuna})`,
            ...getFishSwimStyle('tuna'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.tuna.rotation}deg) ${getFishFlipStyle('tuna')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Tuna.png"
              alt="Tuna"
              width={2025}
              height={780}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.octopus.left * scale}vw)`,
            top: `${relativePositions.octopus.top * scale}vw`,
            width: `${originalSizes.octopus.width * scale}vw`,
            height: `${originalSizes.octopus.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.octopus})`,
            ...getFishSwimStyle('octopus'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.octopus.rotation}deg) ${getFishFlipStyle('octopus')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Octopus.png"
              alt="Octopus"
              width={2369}
              height={768}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.sardine.left * scale}vw)`,
            top: `${relativePositions.sardine.top * scale}vw`,
            width: `${originalSizes.sardine.width * scale}vw`,
            height: `${originalSizes.sardine.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.sardine})`,
            ...getFishSwimStyle('sardine'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.sardine.rotation}deg) ${getFishFlipStyle('sardine')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Sardine.png"
              alt="Sardine"
              width={2369}
              height={852}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: '50%',
            transform: `translateX(-50%) translateX(${relativePositions.ray.left * scale}vw)`,
            top: `${relativePositions.ray.top * scale}vw`,
            width: `${originalSizes.ray.width * scale}vw`,
            height: `${originalSizes.ray.height * scale}vw`,
            zIndex: 1,
            pointerEvents: 'none',
            transformOrigin: 'center center',
            filter: `blur(${backgroundFishBlur.ray})`,
            ...getFishSwimStyle('ray'),
          }}
        >
          <div
            className="w-full h-full"
            style={{
              transform: `rotate(${relativePositions.ray.rotation}deg) ${getFishFlipStyle('ray')}`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/XDiver/Ray.png"
              alt="Ray"
              width={1820}
              height={1061}
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        {clickedFish && clickedFish !== 'man' && isFrameFish(clickedFish) && (
          <>
            <HarpoonRope ropeWidth={0.3 * scale} ropeRef={harpoonRopeRef} />
            <HarpoonHead
              headWidth={4 * scale}
              headHeight={4 * scale}
              headRef={harpoonHeadRef}
            />
          </>
        )}
      </div>
    </div>
  );
}
